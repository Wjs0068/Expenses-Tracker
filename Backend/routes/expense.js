import express from "express";
import {
  getExpenses,
  createExpense,
  deleteExpense,
} from "../controllers/expense.js";

const router = express.Router();

router.get("/", getExpenses);
router.post("/", createExpense);
router.delete("/:id", deleteExpense);

export default router;
