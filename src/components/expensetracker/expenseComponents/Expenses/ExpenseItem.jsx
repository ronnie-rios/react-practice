import { useState } from 'react';
import Card from '../UI/Card';
import './ExpenseItem.css'

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.expenses.title);

  const clickHandler = () => {
    setTitle('updated')
    console.log('click!!!')
  }
  return (
    <li>
      <Card className='expense-item'>
        {props.expenses.map(item => (
          <div id={item.id} className='expense-item__description'>
              <h2>expenses: {item.title}{title}</h2>
              <div className='expense-item__price'>{item.amount}</div>
              <button onClick={clickHandler}>zClick!</button>
          </div>
        ))}
      </Card>
    </li>
  )
}

export default ExpenseItem