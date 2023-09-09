import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";

connect();

interface LoginDetails {
  email: string;
  password: string;
}

export async function POST(request: NextRequest) {
  try {
    const reqBody: LoginDetails = await request.json();
    const { email, password } = reqBody;
    const checkUser: LoginDetails | null | boolean =
      await User.findOne<LoginDetails>({ email, password });

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
