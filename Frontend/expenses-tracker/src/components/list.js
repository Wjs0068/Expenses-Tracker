import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import Button from "@mui/material/Button";
import "./list.css";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const cache = createCache({
  key: "css",
  prepend: true,
});

export default function List() {
  const [expenseList, setExpenseList] = useState([]);

  const deleteExpense = (id) => {
    axios.delete(`http://localhost:5000/expense/${id}`).then(() => {
      window.location.reload(false);
    });
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/expense`).then((allExpenses) => {
      setExpenseList(allExpenses.data);
    });
  }, []);

  return (
    <CacheProvider value={cache}>
      <TableContainer className="table-container" component={Paper}>
        <Table className="table" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="table-header" align="left">
                Expense
              </TableCell>
              <TableCell className="table-header" align="left">
                Amount
              </TableCell>
              <TableCell className="table-header" align="left">
                Date
              </TableCell>
              <TableCell className="table-header" align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {expenseList
              .sort(function (a, b) {
                var dateA = new Date(a.date),
                  dateB = new Date(b.date);
                return dateA - dateB;
              })
              .map((expense, key) => (
                <TableRow
                  className="table-container1"
                  key={key}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell className="list-item" align="left">
                    {expense.expense}
                  </TableCell>
                  <TableCell className="list-item" align="left">
                    ${expense.amount}
                  </TableCell>
                  <TableCell className="list-item" align="left">
                    {new Date(expense.date).toLocaleDateString("en-US", {
                      timeZone: "UTC",
                    })}
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      className="delete-btn"
                      variant="contained"
                      onClick={() => deleteExpense(expense._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CacheProvider>
  );
}
