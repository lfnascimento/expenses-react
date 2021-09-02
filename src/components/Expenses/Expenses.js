import { tsPropertySignature } from "@babel/types";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear);

  const filterChangeHandler = (year) => { 
    setFilteredYear(year);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList expenses={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
