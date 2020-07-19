//  @Package
import React from "react";

//  @Own
import "./counter.css";
import { useCounter } from "../../hooks/useCounter";

export const CounterWithCustomHooks = () => {
  const { state, increment, decrement, reset } = useCounter(220);
  return (
    <>
      <h1>Counter with hook: {state} </h1>
      <h4>Aumenta y resta de a 2 unidades</h4>
      <hr />
      <button onClick={() => increment(2)} className="btn btn-dark">
        +1
      </button>
      <button onClick={reset} className="btn btn-info">
        RESET
      </button>
      <button onClick={() => decrement(2)} className="btn btn-dark">
        -1
      </button>
    </>
  );
};
