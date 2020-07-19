import { useState } from "react";

// Hook personalizado que maneja los formularios
// recibe un obj, que dentro va a tener el name del input.
// Retorna los valores almacenados en values y el metodo handleInputChange para setear los valores.

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

  //destructuring de event.target
  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange, reset];
};
