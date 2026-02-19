import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { dbConnect } from "@/lib/mongodb";
import { Payment } from "@/models/Payment";

export const runtime = "nodejs";
export const dynamic = "force-dynamic"; // webhooks should never be cached

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature");
  if (!sig) return NextResponse.json({ error: "Missing stripe-signature" }, { status: 400 });

  const body = await req.text();

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  await dbConnect();

  // Idempotency guard (Stripe may retry events)
  // We store stripeEventId uniquely; if it already exists, we can safely return 200.
  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as any;

        await Payment.create({
          stripeEventId: event.id,

          stripeCheckoutSessionId: session.id,
          stripePaymentIntentId: session.payment_intent || null,

          industrySlug: session.metadata?.industrySlug,
          planId: session.metadata?.planId,

          amountTotal: session.amount_total,
          currency: session.currency,

          customerEmail: session.customer_details?.email,
          customerId: session.customer || null,

          status: session.payment_status, // usually "paid"
          mode: session.mode,

          raw: session,
        });

        break;
      }

      // Optional: also handle async payment confirmation
      case "checkout.session.async_payment_succeeded":
      case "checkout.session.async_payment_failed": {
        const session = event.data.object as any;

        await Payment.updateOne(
          { stripeCheckoutSessionId: session.id },
          {
            $set: {
              status: session.payment_status,
              raw: session,
            },
          },
          { upsert: true }
        );
        break;
      }

      default:
        // You can store all events if you want, but not required
        break;
    }
  } catch (err: any) {
    // If duplicate key error due to stripeEventId unique constraint, treat as success.
    if (err?.code === 11000) return NextResponse.json({ received: true });
    return NextResponse.json({ error: err.message }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
