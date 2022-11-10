import ExpenseItem from './ExpenseItem';

export default function ExpenseList(props) {
        
  if(props.expenses.length ===0) {
    return <h2 className='expenses-list__fallback'>no expenses</h2>
  }

  return (
    <ul className='expenses-list'>
        <ExpenseItem expenses={props.expenses}/>
    </ul>
  )
}
