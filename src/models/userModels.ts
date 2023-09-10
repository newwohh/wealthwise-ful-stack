import mongoose from "mongoose";

interface NewUser {
  username: string;
  email: string;
  password: string;
  forgotPassword?: string;
  forgotPasswordTokenExpiry?: string;
}

const userSchema: mongoose.Schema<any> = new mongoose.Schema<NewUser>({
  username: {
    type: String,
    required: [true, "please provide password"],
  },
  email: {
    type: String,
    required: [true, "please provide email"],
  },
  password: {
    type: String,
    required: [true, "please provide password"],
  },
  forgotPassword: String,
  forgotPasswordTokenExpiry: String,
});

const User: mongoose.Model<any> =
  mongoose.models.User || mongoose.model("User", userSchema);

export default User;
