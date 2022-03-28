import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState("2022"); // You may set the default year here

  const filterYearHander = (selectedYear) => {
    setFilteredYear(selectedYear);
    //console.log(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        defaultYear={filteredYear}
        onFilterYear={filterYearHander}
      />
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      ;
    </Card>
  );
};

export default Expenses;
