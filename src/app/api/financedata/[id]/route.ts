import { connect } from "@/dbConfig/dbConfig";
import FinancialData from "@/models/financeModel";
import User from "@/models/userModels";
import { NextResponse, NextRequest } from "next/server";

connect();

interface FinancialDataDocument {
  _id: string;
  annualIncome: number;
  user: any;
  rent: number;
  food: number;
  investement: number;
  goal: number;
  __v?: number;
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id: string = params.id;
    console.log(params.id);
    const FinanceData: FinancialDataDocument | null =
      await FinancialData.findOne<FinancialDataDocument>({ user: id });

    const userData = await User.findOne({ _id: id });
    console.log(FinanceData);

    return NextResponse.json({
      message: "success",
      financedata: FinanceData,
      user: userData,
    });
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({ message: error.message });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const { annualIncome } = await request.json();
    const userData = await FinancialData.findOneAndUpdate(
      { user: id },
      { annualIncome: annualIncome },
      { new: true, returnOriginal: false }
    );

    return NextResponse.json({ message: "success", data: userData });
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({ message: error.message });
  }
}
