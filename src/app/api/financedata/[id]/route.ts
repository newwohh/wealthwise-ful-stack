import { connect } from "@/dbConfig/dbConfig";
import FinancialData from "@/models/financeModel";
import { NextResponse, NextRequest } from "next/server";

connect();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    console.log(params.id);
    const FinanceData = await FinancialData.findOne({ user: id });
    console.log(FinanceData);

    return NextResponse.json({ message: "success", data: FinanceData });
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
