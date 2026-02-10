import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema(
  {
    company: { type: String, required: true, trim: true },

    email: { type: String, required: true, trim: true },
    buyerName: { type: String, trim: true },
    leadType: { type: String, required: true },
    phone: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Lead || mongoose.model("Lead", LeadSchema);
