import React, { useContext } from 'react'
import { calculatorContext } from './CalculatorContext'

function Buttonbox({text}) {

    const {setOutput,output,setEvaluated,evaluated} = useContext(calculatorContext)

    const handleClick = (val)=>{

      if(val.text === 'C')
      {
        setOutput('')
        return;

      }
      else if(val.text==='=')
      {
        setEvaluated(true);
        const exp = eval(output);
        setOutput(exp);
        return
      }
      

      if(evaluated  === true){
        setEvaluated(false)
        setOutput('')
      }
      setOutput((prev)=> prev+ val.text)
      console.log(val.text)

    }
  return (
    <div className=' bg-white text-center text-2xl' onClick={()=>handleClick({text})}>{text}</div>
  )
}

export default Buttonbox