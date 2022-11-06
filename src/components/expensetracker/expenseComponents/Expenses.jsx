import'./Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
export default function Expenses(props) {
  return (
    <Card className='expenses'>
        <ExpenseItem expenses={props.expenses}/>
    </Card>
  )
}
