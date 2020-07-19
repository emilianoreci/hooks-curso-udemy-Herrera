//  @Package
import React, { useState } from "react";

//  @Own
import { MultipleCustomsHooks } from "../03-Examples/MultipleCustomsHooks";
import "../02-useEffect/effect.css";

export const RealExampleRef = () => {
  const [show, setshow] = useState(false);
  return (
    <div>
      <h1>RealExampleRef</h1>
      <hr />

      {show && <MultipleCustomsHooks />}

      <button onClick={() => setshow(!show)} className="btn  btn-primary mt-5">
        Show/Hide
      </button>
    </div>
  );
};
