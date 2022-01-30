import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'





function App() {

  const CrateDigits = () =>{
    const digits = []
    for (let i =1;i<10;i++)
    {
      digits.push(
        <button onClick={()=> updateCalculation(i.toString())} className='btn-lg btn btn-dark m-1' key={i}>{i}</button>
      )
    }
  
    return digits
  }


  // setting the state
  const [cale,setCal] = useState("")
  const [result,setResult]=useState("")

  const operators = ['+','/','-','.','*']

  const updateCalculation = value =>
  {
    // reduce side by side operator
    

    setCal(cale+value)
  }



  return (
    

    <div className='container w-50 p-3'>
        <div className="Calculator">

         <div className='row'>
           <div className='col'>
            <div className="display form-control">
              {result ? <span>(0)</span>:''}
              { cale || "0" }
            </div>
           </div>
         </div>

         <div className='row p-2'>
           <div className='col p-1'>
           <div className="operators">
            <button onClick={()=> updateCalculation("+") } className='btn-lg btn btn-dark m-1'>+</button>
              <button onClick={()=> updateCalculation("-") } className='btn-lg btn btn-dark m-1'>-</button>
              <button onClick={()=> updateCalculation("/") } className='btn-lg btn btn-dark m-1'>/</button>
              <button onClick={()=> updateCalculation("*") } className='btn-lg btn btn-dark m-1'>*</button>
              <button className='btn-lg btn btn-dark m-1'>DEL</button>
            </div>
           </div>
         </div>
          
        


          <div className='digites'>
            <div className='row'>
              <div className='col'>
              {CrateDigits()}
              </div>
            </div>
            <button onClick={()=> updateCalculation(".")} className='btn-lg btn btn-dark m-1'>.</button>
            <button className='btn-lg btn btn-dark m-1'>=</button>
            <button onClick={()=> updateCalculation("0")} className='btn-lg btn btn-dark m-1'>0</button>
          </div>


        </div>
    </div>
    
  );
}

export default App;
