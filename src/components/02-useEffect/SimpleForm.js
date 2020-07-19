//  @Package
import React, { useState, useEffect } from "react";

//  @Own
import "./effect.css";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({ name: "", email: "" });

  const { name, email } = formState;

  const handleInputChange = ({ target }) => {
    //console.log(target);
    //console.log(target.name); //ej email o name

    setFormState({
      ...formState, //mantengo lo q tenia el state.
      [target.name]: target.value, //cambio solo el valor del input que cambió.
    });
  };

  //useEffect(() => {});

  return (
    <>
      <h1>use-Effect</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="tu mail"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      <hr />
      {name === "123" && <Message />}
    </>
  );
};
