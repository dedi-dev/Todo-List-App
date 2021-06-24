import React from "react";

class MyNavbar extends React.Component {
  render() {
    return (
      <div className="d-flex flex-row justify-content-between bg-dark p-3 text-white align-item-center">
        <h5>Todo List App</h5>
        <h5>You have 0 todo item/s</h5>
      </div>
    );
  }
}

export default MyNavbar;
