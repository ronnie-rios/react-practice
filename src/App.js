import { useState } from 'react';
import ClassPage from "./components/classExamples/ClassPage";
import EventHandling from "./components/EventHandling";
import AddUser from "./components/MiniProjState/Users/AddUser";
import UserList from "./components/MiniProjState/Users/UserList";
import ExpenseItem from "./components/useRef/ExpenseItem";
import UseRef2 from "./components/useRef/UseRef2";
import UseRef3 from "./components/useRef/UseRef3";
import UseRefExample from "./components/useRef/UseRefExample";

function App() {
  //lifted state from add user to here app and down to userlist
  const [userList, setUserlist] = useState([])
  //add user
  const addUser = (userInfo) =>{
    setUserlist((prev) => {
      return [...prev, userInfo ]
    })
  }

  return (
    <div className="container mt-5">
      <UseRefExample />
      <UseRef2 />
      <UseRef3 />
      <ClassPage />
      <ExpenseItem />
      <EventHandling />
      <AddUser onAddUser={addUser}/>
      <UserList users={userList}/>
    </div>
  );
}

export default App;
