import React from "react";

class TodoItem extends React.Component {
  deleteBtnHandler() {
    alert("Anda menekan tombol DELETE");
  }

  btnHandler(type) {
    alert(`Anda menekan tombol ${type}`);
  }

  render() {
    return (
      <div className="todo-item-container my-1 d-flex flex-row justify-content-between align-item-center">
        {this.props.todoData.activity} ID: {this.props.todoData.id}
        <div>
          <button
            className="btn btn-danger"
            onClick={() => this.props.deleteTodoHandler(this.props.todoData.id)}
          >
            Delete
          </button>
          <button
            className="btn btn-success"
            onClick={() => this.btnHandler("COMPLETE")}
          >
            Complete
          </button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
