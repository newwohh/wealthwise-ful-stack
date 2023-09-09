import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";

connect();

type NewUser = {
  username: string;
  email: string;
  password: string;
};

export async function POST(request: NextRequest) {
  try {
    const reqBody: NewUser = await request.json();
    const { username, email, password } = reqBody;
    const user = new User({
      username,
      email,
      password,
    });
    await user.save();

    return NextResponse.json({ message: "success", user: user });
  } catch (error) {}
}
