import React, { useState } from "react";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import axios from "axios";
import "./form.css";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const cache = createCache({
  key: "css",
  prepend: true,
});

export default function Form() {
  const [expense, setExpense] = useState({
    expense: "",
    amount: 0,
    date: new Date(),
  });

  const createExpense = () => {
    axios.post("http://localhost:5000/expense", expense).then(() => {
      window.location.reload(false);
    });
  };

  return (
    <CacheProvider value={cache}>
      <Box className="form-container">
        <div className="container">
          <label className="label">Expense</label>
          <input
            label="Expense"
            className="input"
            value={expense.expense}
            onChange={(event) => {
              setExpense({ ...expense, expense: event.target.value });
            }}
          />
        </div>
        <div className="container">
          <label className="label">Amount</label>
          <input
            className="input"
            label="Amount"
            variant="outlined"
            value={expense.amount}
            onChange={(event) => {
              setExpense({ ...expense, amount: event.target.value });
            }}
          />
        </div>
        <div className="container">
          <label className="label">Date</label>
          <input
            className="input"
            variant="outlined"
            type="date"
            value={expense.date}
            onChange={(event) => {
              setExpense({ ...expense, date: event.target.value });
            }}
          />
        </div>
        <Button
          className="submit-btn"
          variant="contained"
          color="primary"
          onClick={createExpense}
        >
          Submit
        </Button>
      </Box>
    </CacheProvider>
  );
}
