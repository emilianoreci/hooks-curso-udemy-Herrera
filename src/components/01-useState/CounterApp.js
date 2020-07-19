//  @Package
import React, { useState } from "react";

//  @Own
import "./counter.css";

export const CounterApp = () => {
  /* 
    const [{ counter1, counter2 }, setcounter] = useState({
    counter1: 10,
    counter2: 20,
  });
 */

  // Tengo un state con con varios counter
  const [state, setState] = useState({
    counter_1: 10,
    counter_2: 20,
    counter_3: 40,
    counter_4: 60,
    counter_5: 50,
  });

  //hago destructuring
  const { counter_1, counter_2 } = state;

  return (
    <>
      <h1>Counter1: {counter_1}</h1>
      <h1>Counter2: {counter_2}</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={() =>
          //al usar setState pisa todo lo anterio, observese que se usa el operador ...state.
          setState({
            ...state,
            counter_1: counter_1 + 1,
          })
        }
      >
        +1
      </button>
    </>
  );
};
