import React, { useContext } from "react";
import { calculatorContext } from "./CalculatorContext";

function Outputbox() {
const {output} = useContext(calculatorContext)

  return (
    <div className="bg-black h-[100px] text-white text-right">
      <h1 >{output}
    </h1>
    </div>
  );
}

export default Outputbox;
