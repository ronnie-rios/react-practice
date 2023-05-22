import { useState } from 'react';
import ArrMethods from './components/ArrMethods/ArrMethods';
import ClassPage from "./components/classExamples/ClassPage";
import EventHandling from "./components/EventHandling";
import FormExamp2 from './components/formExample2/FormExamp2';
import AddUser from "./components/MiniProjState/Users/AddUser";
import UserList from "./components/MiniProjState/Users/UserList";
import SortArray from './components/SortArray/SortArray';
import UseRef2 from "./components/useRef/UseRef2";
import UseRef3 from "./components/useRef/UseRef3";
import UseRefExample from "./components/useRef/UseRefExample";
import ReducerContext from './components/reducerContextPrac/ReducerContext';
import { ApiProvider } from './context/ApiContext';
import DisplayAll from './components/Hooks/DisplayAll';
import Expenses from './components/expensetracker/expenseComponents/Expenses/Expenses';
import NewExpense from './components/expensetracker/expenseComponents/NewExpense/NewExpense';
import PassStateUp from './components/formExample2/PassStateUp';
import ContextForm from './components/ContextPracticeII/ContextForm';
import PracticeContext, { PracticeProvider } from './components/ContextPracticeII/context/contextpracticeII';
import { SongList } from './components/contextpracIII/SongList';
import PostLocal from './components/LocalStorage/PostLocal';
const expenses = [
  { id: 1, title: 'car', amount: 250.23 },
  { id: 2, title: 'phone', amount: 50.23 },
  { id: 3, title: 'food', amount: 350.23 },
  { id: 4, title: 'rent', amount: 1500.23 }
]
function App() {
  //lifted state from add user to here app and down to userlist
  const [userList, setUserlist] = useState([])
  const [expense, setExpense] = useState(expenses)
  //add user, it's already an obj so pass in as a param from the component and setting the state
  //once the state is set here, its passed in to the list component
  const addUser = (userInfo) =>{
    setUserlist((prev) => {
      return [...prev, userInfo ]
    })
  }
  const addExpenseHandler = (expense) => {
    setExpense((prevState) => {
      return [expense, ...prevState]
    })
  }
  return (
    <div className="container mt-5">
      {/* <UseRefExample />
      <UseRef2 />
      <UseRef3 />
      <ClassPage />
      <ExpenseItem />
      <EventHandling />
      <AddUser onAddUser={addUser}/>
      <UserList users={userList}/>
      <FormExamp2 />
      <SortArray />
      <ArrMethods />
      <ApiProvider>
        <ReducerContext />
      </ApiProvider>
      <DisplayAll /> */}
      {/* <PassStateUp /> */}
      {/* <Expenses expenses={expense}/>
      <NewExpense onAddExpense={addExpenseHandler}/> */}
      <PracticeProvider>
        <ContextForm />
      </PracticeProvider>
      <SongList />
      <PostLocal />

    </div>
  );
}

export default App;
