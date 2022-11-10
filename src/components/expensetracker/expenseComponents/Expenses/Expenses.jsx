import'./Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseList from './ExpenseList';

export default function Expenses(props) {

  return (
    <Card className='expenses'>
      <ExpenseList expenses={props.expenses}/>
    </Card>
  )
}

