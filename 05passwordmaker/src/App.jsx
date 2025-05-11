import { useState, useCallback, useRef} from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)

  const[numberAllowed, setNumberAllowed] = useState(false);

  const[charAllowed, setCharAllowed] = useState(false);

  const passRef = useRef(null)

  const[password, setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass ="";
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed){
      str+="0123456789";
    }

    if(charAllowed){
      str+="~!@#$%^&*()-_=+[{]}\|;:";
    }

    for (let index = 0; index < length; index++) {
      let char = Math.floor(Math.random()*str.length+1);

      pass +=str.charAt(char);
      
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword])


  const copyToClipboard = useCallback(() => {window.navigator.clipboard.writeText(password)}, [password])

  return (
    <>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 py-3'>
          <h1 className='text-center text-white'>Password Maker</h1>
          <div className='flex rounded overflow-hidden mb-4 my-5'> 
            <input type="text" value={password}  ref={passRef} className="outline-none w-full py-1 px-3 bg-white rounded-l-lg" placeholder='password' readOnly/>
            <button className='bg-blue-500 text-white rounded-5xl py-0.5 px-2' onClick={copyToClipboard} >Copy</button>
          </div>



          <div className='flex text-sm gap-x-2'>
            <div className='flex gap-x-1 items-center'>
                <input
                  type="range"
                  min={6}
                  max={100}
                  value={length}
                  className='cursor-pointer'
                  onChange={(e)=>{setLength(e.target.value)}}
                 
                />

                <label>Length : {length}</label>
            </div>
          </div>
        
        </div>
    </>
  )
}

export default App
