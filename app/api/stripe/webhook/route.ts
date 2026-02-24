import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { dbConnect } from "@/lib/mongodb";
import { Payment } from "@/models/Payment";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature");
  if (!sig) {
    return NextResponse.json(
      { error: "Missing stripe-signature" },
      { status: 400 }
    );
  }

  const body = await req.text();

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    );
  }

  await dbConnect();

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as any;

        // 🔹 Fetch PaymentIntent to get receipt URL
        let receiptUrl = null;
        let paymentMethod = null;

        if (session.payment_intent) {
          const intent = await stripe.paymentIntents.retrieve(
            session.payment_intent
          ) as any;

          const charge = intent.latest_charge ? await stripe.charges.retrieve(intent.latest_charge as string) : null;

          receiptUrl = charge?.receipt_url || null;
          paymentMethod = intent.payment_method_types?.[0] || null;
        }

       await Payment.create({
  stripeEventId: event.id,

  stripeCheckoutSessionId: session.id,
  stripePaymentIntentId: session.payment_intent || null,

  industrySlug: session.metadata?.industrySlug,
  planId: session.metadata?.planId,

  // ⭐ ADD THESE FOR DASHBOARD
  customerEmail: session.metadata?.email || session.customer_details?.email,
  customerName: session.customer_details?.name,
  company: session.metadata?.company || null,

  amountTotal: session.amount_total / 100,
  currency: session.currency,

  customerId: session.customer || null,

  paymentMethod,
  receiptUrl,

  status: session.payment_status,
  mode: session.mode,

  raw: session,
});

        break;
      }

      case "payment_intent.succeeded": {
        const intent = event.data.object as any;

        await Payment.updateOne(
          { stripePaymentIntentId: intent.id },
          {
            $set: {
              status: "succeeded",
              raw: intent,
            },
          },
          { upsert: true }
        );

        break;
      }

      case "payment_intent.payment_failed": {
        const intent = event.data.object as any;

        await Payment.updateOne(
          { stripePaymentIntentId: intent.id },
          {
            $set: {
              status: "failed",
              raw: intent,
            },
          },
          { upsert: true }
        );

        break;
      }

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
        break;
    }
  } catch (err: any) {
    if (err?.code === 11000) {
      return NextResponse.json({ received: true });
    }

    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ received: true });
}