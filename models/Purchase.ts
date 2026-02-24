import mongoose from "mongoose";

const PurchaseSchema = new mongoose.Schema(
  {
    email: String,
    company: String,
    industry: String,
    planId: String,
    amount: Number,
    stripeSessionId: String,
  },
  { timestamps: true }
);

export default mongoose.models.Purchase ||
  mongoose.model("Purchase", PurchaseSchema);