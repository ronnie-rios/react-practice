import'./Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseList from './ExpenseList';

export default function Expenses(props) {

  let expenseContent = <p>no expenses found</p>

  if(props.expenses.length > 0) {
    expenseContent = <ExpenseItem expenses={props.expenses}/>
  }
  return (
    <Card className='expenses'>
      <ExpenseList expenses={props.expenses}/>
    </Card>
  )
}

