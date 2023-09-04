import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
