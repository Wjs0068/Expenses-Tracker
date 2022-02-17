import ExpenseData from "../models/expense.js";

export const getExpenses = async (req, res) => {
  try {
    const allExpenses = await ExpenseData.find();
    res.status(200).json(allExpenses);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createExpense = async (req, res) => {
  const expense = req.body;

  const newExpense = new ExpenseData(expense);

  try {
    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteExpense = async (req, res) => {
  const id = req.params.id;

  try {
    await ExpenseData.findByIdAndRemove(id).exec();
    res.send("Successfully deleted");
  } catch (error) {
    console.log(error);
  }
};
