import mongoose, { Schema, models, model } from "mongoose";

const ContactSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    service: {
      type: String,
      required: true,
      enum: [
        "auto-insurance",
        "medicare-insurance",
        "final-expense",
        "solar",
        "home-insurance",
        "motor-vehicle-accident",
        "pest-control",
        "roofing",
      ],
    },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export default models.Contact || model("Contact", ContactSchema, "contact");
