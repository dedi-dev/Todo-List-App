import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import TodoItem from "./components/TodoItem";
import TodoItemF from "./components/TodoItemF";

class App extends React.Component {
  state = {
    todoList: [
      { activity: "Makan", id: 1 },
      { activity: "Mandi", id: 2 },
      { activity: "Coding", id: 3 },
      { activity: "Tidur", id: 4 },
    ],
    inputTodo: "",
  };

  deleteTodo = (id) => {
    this.setState({
      todoList: this.state.todoList.filter((val) => {
        return val.id !== id;
      }),
    });
  };

  renderTodoList = () => {
    return this.state.todoList.map((val) => {
      return <TodoItem deleteTodoHandler={this.deleteTodo} todoData={val} />;
    });
  };

  inputHandler = (event) => {
    this.setState({ inputTodo: event.target.value });
  };

  addTodo = () => {
    this.setState({
      todoList: [
        ...this.state.todoList,
        { activity: this.state.inputTodo, id: this.state.todoList.length + 1 },
      ],
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        {this.renderTodoList()}
        <input
          type="text"
          className="mx-3"
          onChange={this.inputHandler}
        ></input>
        <button className="btn btn-primary" onClick={this.addTodo}>
          Add todo
        </button>
      </div>
    );
  }
}

export default App;
