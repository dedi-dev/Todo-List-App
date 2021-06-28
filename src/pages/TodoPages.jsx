import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import TodoItem from "../components/TodoItem";
import Axios from "axios";
import { connect } from "react-redux";
import {
  incrementTodoCount,
  decrementTodoCount,
  changeTodoCount,
  fetchTodoGlobal,
} from "../redux/actions/todo";

class TodoPages extends React.Component {
  state = {
    todoList: [],
    inputTodo: "",
  };

  fetchTodo = () => {
    Axios.get("http://localhost:2000/todo")
      .then((response) => {
        this.setState({ todoList: response.data });
        this.props.changeTodo(response.data.length);
      })
      .catch((err) => {
        alert("Terjadi kesalahan di server");
      });
  };

  deleteTodo = (id) => {
    Axios.delete(`http://localhost:2000/todo/${id}`)
      .then(() => {
        alert("Berhasil Delete Todo");
        this.props.fetchTodoGlobal();
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
        this.props.fetchTodoGlobal();
      })
      .catch((err) => {
        alert("Terjadi kesalahan di server");
      });
  };

  componentDidMount() {
    // this.fetchTodo();
    this.props.fetchTodoGlobal();
  }

  renderTodoList = () => {
    return this.props.todoGlobalState.todoList.map((val) => {
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
        this.props.fetchTodoGlobal();
      })
      .catch((err) => {
        alert("Terjadi kesalahan di server");
      });
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <button onClick={this.fetchTodo()} className="btn btn-primary">
          Get My Todo List {this.props.todoGlobalState.todoCount}
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
        <button className="btn btn-warning" onClick={this.props.incrementTodo}>
          Increment
        </button>
        <button className="btn btn-danger" onClick={this.props.decrementTodo}>
          Decrement
        </button>
        <button
          className="btn btn-dark"
          onClick={() => this.props.changeTodo(7)}
        >
          Change
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoGlobalState: state.todo,
  };
};

const mapDispatchToProps = {
  incrementTodo: incrementTodoCount,
  decrementTodo: decrementTodoCount,
  changeTodo: changeTodoCount,
  fetchTodoGlobal,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoPages);
