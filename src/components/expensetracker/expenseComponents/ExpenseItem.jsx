import Card from './Card';
import './ExpenseItem.css'

function ExpenseItem(props) {
  console.log(props);
  return (
    <Card className='expense-item'>
      {props.expenses.map(item => (
        <div id={item.id} className='expense-item__description'>
            <h2>expenses: {item.title}</h2>
            <div className='expense-item__price'>{item.amount}</div>
        </div>
      ))}
    </Card>
  )
}

export default ExpenseItem