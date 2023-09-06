import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { useRouter } from "next/router";
import FinancialData from "@/models/financeModel";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { annualIncome, user, rent, food, investement, goal } = reqBody;
    const FinanceData = new FinancialData({
      annualIncome,
      user,
      rent,
      food,
      investement,
      goal,
    });

    await FinanceData.save();
    return NextResponse.json({ message: "success", user: FinanceData });
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({ message: error.message });
  }
}
