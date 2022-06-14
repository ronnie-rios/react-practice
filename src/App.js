import ClassPage from "./components/ClassPage";
import EventHandling from "./components/EventHandling";
import ExpenseItem from "./components/ExpenseItem";
import UseRef2 from "./components/UseRef2";
import UseRef3 from "./components/UseRef3";
import UseRefExample from "./components/UseRefExample";

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
