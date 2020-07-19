//  @Package
import React, { useState } from "react";

//  @Own
import { useCounter } from "../../hooks/useCounter";
import { Small } from "./Small";
import "../02-useEffect/effect.css";

export const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>
        Memorize, contador: <Small value={counter} />
      </h1>
      <br />
      <h3>{JSON.stringify(show)}</h3>
      <br />
      <button onClick={increment}>aumentar Contador</button>
      <button onClick={() => setShow(!show)}>show/hide</button>
    </div>
  );
};
