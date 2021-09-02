import { useState } from "react";
import NewExpense from "./NewExpense/NewExpense";
import './ExpenseActions.css';

const ExpenseActions = (props) => {
  const [hideNewExpenseForm, setHideNewExpenseForm] = useState(true);
  let content = <button onClick={() => setHideNewExpenseForm(false)}>Add new expense</button>;
  if (!hideNewExpenseForm) {
    content = <NewExpense hideNewExpenseForm={() => setHideNewExpenseForm(true)} onAddExpense={props.addExpenseHandler}></NewExpense>
  }
  return <div className='actions'>{content}</div>
}

export default ExpenseActions;