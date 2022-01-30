import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'





function App() {

  const CrateDigits = () =>{
    const digits = []
    for (let i =1;i<10;i++)
    {
      if(i==5){
        digits.push(<br></br>)
      }
      
      digits.push(
        <button onClick={()=> updateCalculation(i.toString())} className='btn-lg btn btn-dark m-1' key={i}>{i}</button>
      )
    }
  
    return digits
  }

  //total calculation
   const totalCalculation = () =>{
     // update the set cal function in state
      setCal(eval(cale).toString())
   }

   // del item
   const deleteItem = () =>
   {
     if (cale=="")
     {
       return
     }
     const value = cale.slice(0,-1)
     setCal(value)
   }


  // setting the state
  const [cale,setCal] = useState("")
  const [result,setResult]=useState("")

  const operators = ['+','/','-','.','*']

  const updateCalculation = value =>
  {
    // reduce side by side operator 
    // cal always cariess the latest display update
    console.log("all data: ",cale);
    console.log("last data: ",cale.slice(-1));
    console.log("typed data: ",value);
    let cale_last_item = cale.slice(-1)
    if (operators.includes(value) && cale ==="" ||
        operators.includes(value) && operators.includes(cale_last_item)    
    )
    {
      return;
    }
    setCal(cale+value)

    // sum up the result
    if (!operators.includes(value))
    {
      setResult(eval(cale+value).toString())
    }
  }



  return (
    

    <div className='container w-50 p-3'>
        <div className="Calculator">

         <div className='row'>
           <div className='col'>
            <div className="display form-control">
              {result ? <span>({result})</span>:''}
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
              <button onClick={deleteItem} className='btn-lg btn btn-dark m-1 del-button'>DEL</button>

            </div>
           </div>
         </div>
          
        


          <div className='digites'>
            <div className='row'>
              <div className='col'>
              {CrateDigits()}
              </div>
            </div>            
          </div>
          <div className='row'>
              <div className='col'>
              <button onClick={()=> updateCalculation(".")} className='btn-lg btn btn-dark m-1'>.</button>
              <button onClick={totalCalculation} className='btn-lg btn btn-dark m-1'>=</button>
              <button onClick={()=> updateCalculation("0")} className='btn-lg btn btn-dark m-1'>0</button>
              </div>
            </div>


        </div>
    </div>
    
  );
}

export default App;
