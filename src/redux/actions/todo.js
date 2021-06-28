import Axios from "axios";

export const incrementTodoCount = () => {
  return {
    type: "INCREMENT_TODO_COUNT",
  };
};

export const decrementTodoCount = () => {
  return {
    type: "DECREMENT_TODO_COUNT",
  };
};

export const changeTodoCount = (newCount) => {
  return {
    type: "CHANGE_TODO_COUNT",
    payload: newCount,
  };
};

export const fetchTodoGlobal = () => {
  return (dispatch) => {
    Axios.get("http://localhost:2000/todo")
      .then((response) => {
        dispatch({
          type: "GET_TODO",
          payload: response.data,
        });

        dispatch({
          type: "GET_TODO_COUNT",
          payload: response.data.length,
        });
      })
      .catch((err) => {
        alert("Terjadi kesalahan di server");
      });
  };
};
