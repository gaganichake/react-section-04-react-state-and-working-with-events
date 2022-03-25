import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./../UI/Card";
import { useState } from "react";

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React");
  
  // function clickHandler() {}
  const clickHandler = () => {
    setTitle("Updated title!");
    console.log(title);
  }

  // You must have only ONE root HTML element in return statement as JSX expressions must have one parent element.
  // For multiple line you should wrape the whole HTML code (the JSX) inside braces "()" to signal JavaScript that it's a one statement
  // Use keyboard shortcut shift + option + F to format the source code in this document
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Buttom</button>
    </Card>
  );
}

export default ExpenseItem;

