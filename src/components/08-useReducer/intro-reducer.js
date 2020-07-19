const initialState = [
  {
    id: 1,
    todo: "comprar pan",
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  if (action?.type === "AGREGAR") {
    return [...state, action.payload];
  }
  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "hacer tarea",
  done: false,
};

const agregarTodoAction = {
  type: "AGREGAR",
  payload: newTodo,
};

todos = todoReducer(todos, agregarTodoAction);

console.log(todos);
