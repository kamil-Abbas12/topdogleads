import mongoose, { Schema, models, model } from "mongoose";

const PestControlLeadSchema = new Schema(
  {
    company: { type: String, required: true },
    email: { type: String, required: true },
    buyerName: { type: String, default: "" },
    leadType: { type: String, required: true, enum: ["call", "lead"] },
    phone: { type: String, required: true },
  },
  { timestamps: true }
);

// IMPORTANT: third argument is the exact MongoDB collection name: "solar"
export default models.PestControlLead || model("PestControlLead", PestControlLeadSchema, "pest-control");