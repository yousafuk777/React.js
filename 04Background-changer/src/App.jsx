import { useState } from "react"

function App() {
  const [color, setColor] = useState("gray")

  return (
 <div className="w-full h-screen duration-200"
 
 style={{backgroundColor:color}}
 >
  <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
      <button
      onClick={()=> setColor("red")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"red"}}
      >Red</button>
       <button 
        onClick={()=> setColor("green")}
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"green"}}
      >green</button>
       <button
        onClick={()=> setColor("Black")}
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"black"}}
      >Black</button>
       <button
        onClick={()=> setColor("Blue")}
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"Blue"}}
      >Blue</button>
       <button
        onClick={()=> setColor("Purple")}
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"Purple"}}
      >Purple</button>
           <button
        onClick={()=> setColor("Pink")}
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"Pink"}}
      >Pink</button>
           <button
        onClick={()=> setColor("Cyan")}
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"Cyan"}}
      >Cyan</button>
           <button
        onClick={()=> setColor("Teal")}
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"Teal"}}
      >Teal</button>
           <button
        onClick={()=> setColor("Maroon")}
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"Maroon"}}
      >Maroon</button>
           <button
        onClick={()=> setColor("Yellow")}
       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"Yellow"}}
      >Yellow</button>
    </div>
  </div>
 </div>
 
  )
}

export default App
