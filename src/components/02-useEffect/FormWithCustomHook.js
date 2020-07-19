//  @Package
import React from "react";

//  @Own
import "./effect.css";
import { useForm } from "../../hooks/useForm";

export const FormWithCustomHook = () => {
  //si necesitara validar algun campo, se lo mando en un array como segundo argumento a mi hook
  //const [formValues, handleInputChange] = useForm({
  //    name: "",
  //    email: ""
  //  }, ['name']);

  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHook</h1>
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

      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="******"
          value={password}
          onChange={handleInputChange}
        />
      </div>

      <button className="btn btn-primary" type="submit">
        Guardar
      </button>
    </form>
  );
};
