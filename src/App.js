import "./App.css";
import React, { useEffect, useState } from "react";
import Outputbox from "./components/Outputbox";
import Keyboardbox from "./components/Keyboardbox";
import { calculatorContext } from "./components/CalculatorContext";

function App() {

  const [output,setOutput] = useState('');
  const [evaluated,setEvaluated] = useState(false);

 
  

  return (
    <>
      
      <h1 className="text-center text-3xl mt-10">React Calculator</h1>

      <div className='bg-slate-400 w-[40%] h-[400px] mx-auto'>

        
      <calculatorContext.Provider value={{setOutput,output, evaluated,setEvaluated}}>
      <Outputbox />
      <Keyboardbox/>
      </calculatorContext.Provider>
        

      </div>
    </>
  );
}

export default App;
