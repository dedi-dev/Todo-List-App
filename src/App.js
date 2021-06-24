import React from "react";
import "./App.css";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import MyNavbar from "./components/MyNavbar";
import TodoPages from "./pages/TodoPages";

class App extends React.Component {
  render() {
    return (
      <div>
        <MyNavbar />
        <TodoPages />
      </div>
    );
  }
}

export default App;
