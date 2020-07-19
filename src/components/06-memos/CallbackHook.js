//  @Package
import React, { useState, useCallback } from "react";

//  @Own
import { ShowIncrement } from "./ShowIncrement";
import "../02-useEffect/effect.css";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  /*
  Asi directamente esta mal, porque renderizaría la fn 
  const increment = () => {
    setCounter(counter + 1);
  };
*/

  const increment = useCallback(
    (num) => {
      //en el setCounter en vez de poner counter + num, le paso el parametro c,
      //de ésta forma elimino la dependencia counter
      setCounter((c) => c + num);
    },
    //si pondria como dependecia a couter, volveria a renderizarse
    [setCounter]
  );

  return (
    <div>
      <h1>CallbackHook {counter}</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </div>
  );
};
