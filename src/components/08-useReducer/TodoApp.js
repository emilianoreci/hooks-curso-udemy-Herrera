//  @Package
import React, { useReducer, useEffect } from "react";

//  @Own
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import "./style.css";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

//const initialState = [
//  {
//    id: new Date().getTime(),
//    todo: "aprender react",
//    done: false,
//  },
//];

export const TodoApp = () => {
  //const [todos, dispatch] = useReducer(todoReducer, initialState);
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (id) => {
    //console.log(id);
    const action = {
      type: "delete",
      payload: id,
    };

    dispatch(action);
  };

  const handleToggle = (id) => {
    dispatch({
      type: "toggle",
      payload: id,
    });
  };

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };

  return (
    <div>
      <h1>TodoApp ({todos.length}) </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};
