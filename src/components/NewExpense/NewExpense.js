import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
  }
  return <div>
    <ExpenseForm hideNewExpenseForm={props.hideNewExpenseForm} onSaveExpenseData={saveExpenseDataHandler}/>
  </div>
}

export default NewExpense;