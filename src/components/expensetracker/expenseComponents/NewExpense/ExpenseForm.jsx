import React from 'react';
import './ExpenseForm.css';

export default function ExpenseForm() {
  return (
    <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step="0.01" />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>add expense</button>
        </div>
    </form>
  )
}
