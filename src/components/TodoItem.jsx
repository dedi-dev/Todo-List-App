import React from "react";

class TodoItem extends React.Component {
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
            disabled={this.props.todoData.isFinished}
            className="btn btn-success"
            onClick={() =>
              this.props.completeTodoHandler(this.props.todoData.id)
            }
          >
            {this.props.todoData.isFinished ? "Finished" : "Complete"}
          </button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
