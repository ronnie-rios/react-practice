import ClassPage from "./components/classExamples/ClassPage";
import EventHandling from "./components/EventHandling";
import AddUser from "./components/MiniProjState/Users/AddUser";
import ExpenseItem from "./components/useRef/ExpenseItem";
import UseRef2 from "./components/useRef/UseRef2";
import UseRef3 from "./components/useRef/UseRef3";
import UseRefExample from "./components/useRef/UseRefExample";

function App() {
  return (
    <div className="container mt-5">
      <UseRefExample />
      <UseRef2 />
      <UseRef3 />
      <ClassPage />
      <ExpenseItem />
      <EventHandling />
      <AddUser />
    </div>
  );
}

export default App;
