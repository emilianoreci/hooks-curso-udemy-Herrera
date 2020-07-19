//  @Package
import React from "react";
import Proptypes from "prop-types";

//  @Own
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos, handleToggle, handleDelete }) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.map((each, i) => (
        <TodoListItem
          key={each.id}
          {...each}
          index={i}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: Proptypes.array.isRequired,
  handleToggle: Proptypes.func.isRequired,
  handleDelete: Proptypes.func.isRequired,
};
