
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

export default function NewExpense() {
  const saveExpenseData = (enteredFormData) => {
    const expenseData = {
      ...enteredFormData,
      id: Math.random().toString()
    }
    console.log(expenseData)
  }
  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpense={saveExpenseData}/>
    </div>
  )
}
