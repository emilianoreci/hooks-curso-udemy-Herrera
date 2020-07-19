import React, { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    //effect;
    console.log("componente montado");

    //cada vez q se monta el componente se dispara un nuevo mousemove, el cual consumirá memoria.
    //window.addEventListener("mousemove", (e) => {
    //  //const coors = { x: e.x, y: e.y };
    //  //console.log(coors);
    //});

    const mouseMove = (e) => {
      console.log(":D");
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      //cleanup;
      console.log("componente desmontado");
      //cuando se desmonta, remuevo el listener.
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div>
      <h3>eres genial</h3>
    </div>
  );
};
