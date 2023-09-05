import mongoose from "mongoose";

const financeSchema = new mongoose.Schema({
  annualIncome: {
    type: Number,
    required: [true, "please provide annual income"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    required: [true, "please provide  user"],
  },
  rent: {
    type: Number,
    required: [true, "please provide  rent"],
  },
  food: {
    type: Number,
    required: [true, "please provide  food"],
  },
  investement: {
    type: Number,
    required: [true, "please provide  investement"],
  },
  goal: {
    type: Number,
    required: [true, "please provide  goal"],
  },
});

const FinancialData =
  mongoose.models.FinancialData ||
  mongoose.model("FinancialData", financeSchema);

export default FinancialData;
