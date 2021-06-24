import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import TodoItem from "./components/TodoItem";
import TodoItemF from "./components/TodoItemF";
import Axios from "axios";

class App extends React.Component {
  state = {
    todoList: [],
    inputTodo: "",
  };

  fetchTodo = () => {
    Axios.get("http://localhost:2000/todo")
      .then((response) => {
        this.setState({ todoList: response.data });
      })
      .catch((err) => {
        alert("Terjadi kesalahan di server");
      });
  };

  deleteTodo = (id) => {
    Axios.delete(`http://localhost:2000/todo/${id}`)
      .then(() => {
        alert("Berhasil Delete Todo");
        this.fetchTodo();
      })
      .catch((err) => {
        alert("Terjadi kesalahan di server");
      });
  };

  completeTodo = (id) => {
    Axios.patch(`http://localhost:2000/todo/${id}`, {
      isFinished: true,
    })
      .then(() => {
        alert("Berhasil complete todo");
        this.fetchTodo();
      })
      .catch((err) => {
        alert("Terjadi kesalahan di server");
      });
  };

  componentDidMount() {
    this.fetchTodo();
  }

  renderTodoList = () => {
    return this.state.todoList.map((val) => {
      return (
        <TodoItem
          todoData={val}
          deleteTodoHandler={this.deleteTodo}
          completeTodoHandler={this.completeTodo}
        />
      );
    });
  };

  inputHandler = (event) => {
    this.setState({ inputTodo: event.target.value });
  };

  addTodo = () => {
    Axios.post("http://localhost:2000/todo", {
      activity: this.state.inputTodo,
      isFinished: false,
    })
      .then(() => {
        alert("Berhasil menambahkan Todo");
        this.fetchTodo();
      })
      .catch((err) => {
        alert("Terjadi kesalahan di server");
      });
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <button className="btn btn-info" onClick={this.fetchTodo}>
          Get My Todo List
        </button>
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
