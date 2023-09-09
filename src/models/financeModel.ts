import mongoose from "mongoose";

interface NewFinanceData {
  annualIncome: number;
  user: any;
  rent: number;
  food: number;
  investement: number;
  goal: number;
}

const financeSchema = new mongoose.Schema<NewFinanceData>({
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

const FinancialData: mongoose.Model<any> =
  mongoose.models.FinancialData ||
  mongoose.model("FinancialData", financeSchema);

export default FinancialData;
