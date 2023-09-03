import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    const checkUser = await User.findOne({ email, password });
    if (checkUser) {
      return NextResponse.json({ message: "success", user: checkUser });
    } else if (!checkUser) {
      return NextResponse.json({ message: "failed" });
    }
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ message: error.message });
  }
}
