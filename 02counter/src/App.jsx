import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(5)

  const addValue = () =>{
    if(counter<20){
      setCounter(counter+1);
    }
    

  }


  const removeValue = () =>{

    if(counter>0){
      setCounter(counter-1);
    }
    
  }

  return (
   <>
      <h1>CHAI AUR REACT</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addValue}>Increase Value :{counter}</button>
      <button onClick={removeValue}>Decrease Value {counter}</button>
    
   </>
  )
}

export default App
