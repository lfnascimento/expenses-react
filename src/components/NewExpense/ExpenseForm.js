import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({enteredTitle: '', enteredAmount: '', enteredDate: '' });
  const titleChangedHandler = (e) => setUserInput((prevState) => {  
    return { ...prevState, enteredTitle: e.target.value }
  });
  const amountChangedHandler = (e) => setUserInput((prevState) => { 
   return { ...prevState, enteredAmount: e.target.value }
  });
  const dateChangedHandler = (e) => setUserInput((prevState) => { 
    return {...prevState, enteredDate: e.target.value };
  });
  const submitHandler = (event) => { 
    event.preventDefault();
    const expenseData = { title: userInput.enteredTitle, amount: userInput.enteredAmount, date: new Date(userInput.enteredDate) } ;
    props.onSaveExpenseData(expenseData);
    setUserInput({enteredTitle: '', enteredAmount: '', enteredDate: '' });
    props.hideNewExpenseForm();
  };

  return <form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
      <div className='new-expense__controls'>
        <label>Title</label>
        <input type='text' value={userInput.enteredTitle} onChange={titleChangedHandler} />
      </div>
      <div className='new-expense__controls'>
        <label>Amount</label>
        <input type='number' value={userInput.enteredAmount} min="0.01" step="0.01" onChange={amountChangedHandler} />
      </div>
      <div className='new-expense__controls'>
        <label>Date</label>
        <input type='date' value={userInput.enteredDate} min="2019-01-01" max="2020-12-31" onChange={dateChangedHandler} />
      </div>
    </div>
    <div className="new-expense__actions">
      <button type="submit">Add Expense</button>
      <button onClick={() => props.hideNewExpenseForm()}>Cancel</button>
    </div>
  </form>
}

export default ExpenseForm;