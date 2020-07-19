export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "delete":
      return state.filter((each) => each.id !== action.payload);

    case "toggle":
      return state.map((each) =>
        each.id === action.payload ? { ...each, done: !each.done } : each
      );

    default:
      return state;
  }
};
