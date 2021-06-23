import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoItem />
    </div>
  );
}

export default App;
