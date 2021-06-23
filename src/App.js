import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import TodoItem from "./components/TodoItem";
import TodoItemF from "./components/TodoItemF";

class App extends React.Component {
  state = {
    namaku: "Purwadhika",
    user: {
      username: "Username",
      email: "user@mail.com",
    },
    arr: ["Apel", "Pisang", "Leci"],
    todoList: [
      { activity: "Makan", id: 1 },
      { activity: "Mandi", id: 2 },
      { activity: "Coding", id: 3 },
      { activity: "Tidur", id: 4 },
    ],
  };

  renderTodoList = () => {
    return this.state.todoList.map((val) => {
      return <TodoItem todoData={val} />;
    });
  };

  addTodo = () => {
    this.setState({ namaku: "Coding School" });
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <h1>{this.state.namaku}</h1>
        {this.renderTodoList()}
        <button className="btn btn-primary" onClick={this.addTodo}>
          Add todo
        </button>
      </div>
    );
  }
}

export default App;
