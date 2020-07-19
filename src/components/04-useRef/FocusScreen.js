//  @Package
import React, { useRef } from "react";

//  @Own
import "../02-useEffect/effect.css";

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
    console.log(inputRef);
    console.log(inputRef.current.value);
    console.log(inputRef.current.name);
  };

  return (
    <>
      <h1>focusScreen</h1>
      <hr />

      <input
        ref={inputRef}
        name="nombre"
        className="form-control"
        placeholder="Su nombre"
      />

      <button className="btn btn-outline-primary mt-5" onClick={handleClick}>
        Focus
      </button>
    </>
  );
};
