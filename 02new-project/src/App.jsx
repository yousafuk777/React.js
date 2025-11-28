import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let [counter, setCounter] = useState(15)
  // // let counter = 15
  // const addvalue = () =>{

    
  //   counter = counter + 1
  //   console.log("Clicked ", counter);
  //   setCounter(counter)
  // }

  //   const removevalue = () =>{

    
  //   counter = counter - 1
  //   console.log("Clicked ", counter);
  //   setCounter(counter)
  // }

  const [counter, setCounter] = useState(15);

const addvalue = () => {
  setCounter(prev => {
    if (prev < 20) {
      return prev + 1;
    }
    return prev;        // stay at 20
  });
};

const removevalue = () => {
  setCounter(prev => {
    if (prev > 0) {
      return prev - 1;
    }
    return prev;        // stay at 0
  });
};


  return (
    <>
    <h1>Khamoshiyang</h1>
    <h2>Counter Value {counter}</h2>

    <button
    onClick={addvalue}
    >Add value {counter}</button>
    <br />
    <br />
    <button
     onClick={removevalue}
     >Remove value {counter}</button>
    </>
  )
}

export default App
