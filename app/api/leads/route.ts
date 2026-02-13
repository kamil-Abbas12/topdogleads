import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import SolarLead from "@/models/SolarLead"
import RoofingLead from "@/models/RoofingLead";
import PestControlLead from "@/models/PestControlLead";
import MedicareInsuranceLead from "@/models/MedicareInsuranceLead";
import MotorVehicleAccidentLead from "@/models/MotorVehicleAccidentLead";
import HomeInsuranceLead from "@/models/HomeInsuranceLead";
import AutoInsuranceLead from "@/models/AutoInsuranceLead";
import FinalExpenseLead from "@/models/FinalExpenseLead";

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

    let Model;

    switch (industry) {
      case "solar":
        Model = SolarLead;
        break;
 case "final-expense":
        Model = FinalExpenseLead;
        break;
      case "roofing":
        Model = RoofingLead;
        break;

      case "medicare-insurance":
        Model = MedicareInsuranceLead;
        break;

      case "pest-control":
        Model = PestControlLead;
        break;
        
      case "motor-vehicle-accident":
        Model = MotorVehicleAccidentLead;
        break;
      case "home-insurance":
        Model = HomeInsuranceLead;
        break;
        case "auto-insurance":
        Model = AutoInsuranceLead;
        break;


      default:
        return NextResponse.json(
          { success: false, message: "Invalid industry" },
          { status: 400 }
        );
    }

    await Model.create({ company, email, buyerName, leadType, phone });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API ERROR:", err);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}