import ClassPage from "./components/classExamples/ClassPage";
import EventHandling from "./components/EventHandling";
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
    </div>
  );
}

export default App;
