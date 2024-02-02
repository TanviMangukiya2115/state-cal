import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let[val,setval]=useState("")
  let[val1,setval1]=useState("")
  let[ans,getans]=useState("")

  const calsum = () =>{
    getans(parseInt(val)+parseInt(val1));
  }
  const calsub = () =>{
    getans(parseInt(val)-parseInt(val1));
  }
  const calmul = () =>{
    getans(parseInt(val)*parseInt(val1));
  }
  const caldiv = () =>{
    getans(parseInt(val)/parseInt(val1));
  }
 
  return (
    <div className="App">
        <input type='text' onChange={(e)=>{setval(e.target.value)}}></input>
        <input type='text' onChange={(e)=>{setval1(e.target.value)}}></input>
        <input type='text' value={ans}></input>

        <input type='button' value={'Sum'} onClick={calsum}></input>
        <input type='button' value={'Sub'} onClick={calsub}></input>
        <input type='button' value={'Multiplication'} onClick={calmul}></input>
        <input type='button' value={'Division'} onClick={caldiv}></input>
    </div>
  );
}

export default App;
