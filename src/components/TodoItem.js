import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <div className="todo-item-container my-1 d-flex flex-row justify-content-between align-item-center">
        Makan
        <div>
          <button className="btn btn-danger">Delete</button>
          <button className="btn btn-success">Complete</button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
