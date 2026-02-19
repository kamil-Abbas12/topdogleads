import { NextResponse } from "next/server";
import {dbConnect} from "@/lib/mongodb";

import SolarLead from "@/models/SolarLead";
import RoofingLead from "@/models/RoofingLead";
import PestControlLead from "@/models/PestControlLead";
import MedicareInsuranceLead from "@/models/MedicareInsuranceLead";
import MotorVehicleAccidentLead from "@/models/MotorVehicleAccidentLead";
import HomeInsuranceLead from "@/models/HomeInsuranceLead";
import AutoInsuranceLead from "@/models/AutoInsuranceLead";
import FinalExpenseLead from "@/models/FinalExpenseLead";

const MODEL_BY_INDUSTRY: Record<string, any> = {
  solar: SolarLead,
  "final-expense": FinalExpenseLead,
  "pest-control": PestControlLead,
  "medicare-insurance": MedicareInsuranceLead,
  "motor-vehicle-accident": MotorVehicleAccidentLead,
  "home-insurance": HomeInsuranceLead,
  "auto-insurance": AutoInsuranceLead,

  // ✅ support both slugs to avoid “Invalid industry”
  "roofing": RoofingLead,
};

export async function POST(req: Request) {
  try {
    await dbConnect();

    const body = await req.json();
    const { industry, company, email, buyerName, leadType, phone } = body;

    if (!industry || !company || !email || !leadType || !phone) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const Model = MODEL_BY_INDUSTRY[industry];
    if (!Model) {
      return NextResponse.json(
        { success: false, message: `Invalid industry: ${industry}` },
        { status: 400 }
      );
    }

    const doc = await Model.create({ company, email, buyerName, leadType, phone });

    return NextResponse.json({ success: true, id: doc._id });
  } catch (err) {
    console.error("API ERROR:", err);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
