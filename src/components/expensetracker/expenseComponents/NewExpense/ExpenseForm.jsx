import { useState } from 'react';
import './ExpenseForm.css';

export default function ExpenseForm(props) {
    //initial state is empty str on page loads
   const [userInput, setUserInput] = useState({
        title: '',
        amount: ''
   })
    const titleHandler = (e) => {
        setUserInput((prevState) => {
            return {...prevState, title: e.target.value}
        })
    }
    const amountHandler = (e) => {
        setUserInput((prevState) => {
            return {...prevState, amount: e.target.value}
        })
        
    }
    const submitHandler = (e) => {
        e.preventDefault();
        props.onSaveExpense(userInput)
        setUserInput({
            title: '',
            amount: ''
        })
    }

  return (
    <form onSubmit={submitHandler} >
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={userInput.title} onChange={titleHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step="0.01" value={userInput.amount} onChange={amountHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>add expense</button>
        </div>
    </form>
  )
}
