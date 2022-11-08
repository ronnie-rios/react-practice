import { useState } from 'react';
import './ExpenseForm.css';

export default function ExpenseForm() {
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


  return (
    <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={titleHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step="0.01" onChange={amountHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>add expense</button>
        </div>
    </form>
  )
}
