import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  expense: String,
  amount: Number,
  date: {
    type: Date,
    default: new Date(),
  },
});

const expenseModel = mongoose.model("Expense", expenseSchema);

export default expenseModel;
