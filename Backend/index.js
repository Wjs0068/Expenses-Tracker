import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import expenseRoutes from "./routes/expense.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/expense", expenseRoutes);

mongoose.connect(process.env.MONGO_CLIENT);

let port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`The server is running on port: ${port}`);
});
