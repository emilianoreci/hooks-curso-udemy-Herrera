//  @Package
import React from "react";
import PropTypes from "prop-types";

export const TodoListItem = ({
  id,
  done,
  todo,
  index,
  handleDelete,
  handleToggle,
}) => {
  return (
    <li key={id} className="list-group-item">
      <p className={`${done && "complete"}`} onClick={() => handleToggle(id)}>
        {index + 1}. {todo}
      </p>
      <button className="btn btn-danger" onClick={() => handleDelete(id)}>
        Eliminar
      </button>
    </li>
  );
};

TodoListItem.propTypes = {
  id: PropTypes.number.isRequired,
  done: PropTypes.bool.isRequired,
  todo: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
};
