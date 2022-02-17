import "./App.css";
import Form from "./components/form.js";
import List from "./components/list.js";
import * as React from "react";

export default function FixedContainer() {
  return (
    <div className="container-whole">
      <Form />
      <List />
    </div>
  );
}
