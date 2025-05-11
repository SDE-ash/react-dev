import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
   
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 flex flex-wrap justify-center bg-white gap-5 shadow-lg px-3 py-2 rounded-3xl w-fit">
        
          <div className="outline-none px-4 rounded-3xl text-white shadow-lg w-fit cursor-pointer" style={{backgroundColor:"red"}} onClick={()=>{setColor("red")}}>Red</div>

          <div className="outline-none px-4 rounded-3xl text-white shadow-lg w-fit cursor-pointer" style={{backgroundColor:"blue"}} onClick={()=>{setColor("blue")}}>Blue</div>

          <div className="outline-none px-4 rounded-3xl text-white shadow-lg w-fit cursor-pointer" style={{backgroundColor:"green"}} onClick={()=>{setColor("green")}}>Green</div>

          <div className="outline-none px-4 rounded-3xl text-white shadow-lg w-fit cursor-pointer" style={{backgroundColor:"violet"}} onClick={()=>{setColor("violet")}}>Violet</div>
          
          <div className="outline-none px-4 rounded-3xl text-white shadow-lg w-fit cursor-pointer" style={{backgroundColor:"purple"}} onClick={()=>{setColor("purple")}}>Purple</div>


          <div className="outline-none px-4 rounded-3xl text-white shadow-lg w-fit cursor-pointer" style={{backgroundColor:"black"}} onClick={()=>{setColor("black")}}>Black</div>
          
          <div className="outline-none px-4 rounded-3xl text-white shadow-lg w-fit cursor-pointer" style={{backgroundColor:"aqua"}} onClick={()=>{setColor("aqua")}}>Aqua</div>
      
      </div>
    </div>

    
   
  )
}

export default App
