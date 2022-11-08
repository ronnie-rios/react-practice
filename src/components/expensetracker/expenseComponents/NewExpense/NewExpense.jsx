import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

export default function NewExpense(props) {
  const saveExpenseData = (enteredFormData) => {
    const expenseData = {
      ...enteredFormData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
  }
  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpense={saveExpenseData}/>
    </div>
  )
}
