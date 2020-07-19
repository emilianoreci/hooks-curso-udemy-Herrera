//  @Package
import React, { useRef, useLayoutEffect, useState } from "react";

//  @Own
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";
import "./layout.css";

export const Layout = () => {
  const { counter, increment } = useCounter(1);

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const [boxSizing, setBoxSizing] = useState({});

  const { quote } = !!data && data[0];

  const pTag = useRef();

  useLayoutEffect(() => {
    setBoxSizing(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>Layout Effect</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p ref={pTag} className="mb-0">
          " {quote} "
        </p>
      </blockquote>

      <button className="btn btn-primary" onClick={increment}>
        Siguiente Frase
      </button>

      <pre>{JSON.stringify(boxSizing, null, 3)}</pre>
    </div>
  );
};
