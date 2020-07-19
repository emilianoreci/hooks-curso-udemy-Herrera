//  @Package
import React from "react";

//  @Own
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/effect.css";

export const MultipleCustomsHooks = () => {
  const { counter, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  // console.log(data); al cargarse arroja null
  // null devuelve null
  // !null devuelve true
  // !!null devuelve false
  // evaluo data que sea true y obtengo lo que haya en la posicion 0 de data
  const { author, quote } = !!data && data[0];
  console.log(quote);

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0">" {quote} "</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button className="btn btn-primary" onClick={increment}>
        Siguiente Frase
      </button>
    </div>
  );
};
