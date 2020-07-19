import { useState } from "react";

export const useCounter = (initialState = 10) => {
  const [counter, setCounter] = useState(initialState);

  //le paso un parametro "factor" y cuando lo implemento le paso el argumento, ej 2
  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(initialState);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};

/*
Usando un factor, para que pueda indicar de a cuanto aumente o disminuya el contador

export const useCounter = (initialState = 10) => {
  const [state, setstate] = useState(initialState);

  le paso un parametro "factor" y cuando lo implemento le paso el argumento, ej 2
  const increment = (factor = 1) => {
    setstate(state + factor);
  };

  const decrement = (factor = 1) => {
    setstate(state - factor);
  };

  const reset = () => {
    setstate(initialState);
  };

  return {
    state,
    increment,
    decrement,
    reset,
  };
};

*/
