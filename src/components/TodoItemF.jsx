import React from "react";

const TodoItemF = (props) => {
  const deleteBtnHandler = () => {
    alert("Anda menekan tombol Delete");
  };

  const btnHandler = (type) => {
    alert(`Anda menekan tombol ${type}`);
  };

  return (
    <div className="todo-item-container my-1 d-flex flex-row justify-content-between align-item-center">
      {props.todoData.activity} ID {props.todoData.id}
      <div>
        <button className="btn btn-danger" onClick={deleteBtnHandler}>
          Delete
        </button>
        <button
          className="btn btn-success"
          onClick={() => btnHandler("COMPLETE")}
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default TodoItemF;
