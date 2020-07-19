//  @Package
import React, { useState, useMemo } from "react";

//  @Own
import { useCounter } from "../../hooks/useCounter";
import { procesoPesado } from "./helpers/procesoPesado";
import "../02-useEffect/effect.css";

export const MemoHook = () => {
  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);

  //le paso a memo la funcion y como segundo arg. la dependecia "counter"
  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>MemoHook, contador: {counter}</h1>
      <br />
      <h3>{JSON.stringify(show)}</h3>
      <hr />
      <p>{memoProcesoPesado}</p>
      <hr />
      <button onClick={increment}>aumentar Contador</button>
      <button onClick={() => setShow(!show)}>show/hide</button>
    </div>
  );
};
