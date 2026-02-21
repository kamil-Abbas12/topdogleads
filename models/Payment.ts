import mongoose, { Schema } from "mongoose";

const PaymentSchema = new Schema(
  {
    stripeEventId: { type: String, index: true, unique: true, sparse: true },

    stripeCheckoutSessionId: { type: String, index: true },
    stripePaymentIntentId: { type: String, index: true },

    industrySlug: { type: String, index: true },
    planId: { type: String, index: true },

    amountTotal: Number,
    currency: String,
    paymentMethod: String,
    receiptUrl: String,
    customerName: String,
    customerEmail: String,
    customerId: String,

    status: { type: String, index: true }, // e.g. "paid", "unpaid"
    mode: String, // "payment" or "subscription"

    raw: Schema.Types.Mixed, // optional: store Stripe object snapshot
  },
  { timestamps: true }
);

export const Payment =
  mongoose.models.Payment || mongoose.model("Payment", PaymentSchema);
