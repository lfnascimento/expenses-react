import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import ExpenseActions from "./components/ExpenseActions";
import { useState } from "react";

const DUMMY_EXPENSES = [
  { id: 'e1', title: "Car Insurance", amount: 799.59, date: new Date(2021, 7, 16) },
  { id: 'e2', title: "tv", amount: 499.59, date: new Date(2020, 4, 1) },
  { id: 'e3', title: "ps5", amount: 1200.29, date: new Date(2020, 10, 9) },
  { id: 'e4', title: "iphone", amount: 1600.10, date: new Date(2021, 11, 25) },
  { id: 'e5', title: "tesla", amount: 9600.10, date: new Date(2022, 6, 25) },
  { id: 'e6', title: "ryzen 9", amount: 3600.10, date: new Date(2022, 1, 22) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => [expense, ...prevExpenses]);
  }

  return (
    <div>
      <ExpenseActions addExpenseHandler={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
