import'./Expenses.css';
import ExpenseItem from './ExpenseItem'

export default function Expenses(props) {
  return (
    <div className='expenses'>
        <ExpenseItem expenses={props.expenses}/>
    </div>
  )
}
