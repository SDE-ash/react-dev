import { useState, useCallback, useEffect, useRef} from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [noAllowed, setNoAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef(null);

  const copyPasswordToClipBoard = useCallback(()=>{
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)}, [password])


  const passwordGenerator = useCallback(()=>{
    let pass ="";

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(noAllowed){
      str+="0123456789"
    }

    if(charAllowed){
      str+="@#$%&*!+=-";
    }

    for (let index = 1; index <=length; index++) {
      let ch = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(ch)
    }

    setPassword(pass);


  }, [length, noAllowed, charAllowed, setPassword])

  useEffect(()=>{passwordGenerator()}, [length, noAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-600'>
          <h3 className='text-center text-xl text-white py-2'>Password Generator</h3>
          
          <div className='flex shadow rounded-lg overflow-hidden  mb-4 bg-white '>
              <input type="text" value={password} ref={passRef} placeholder='password' className='outline-none w-full py-1 px-3' readOnly/>
              <button onClick={copyPasswordToClipBoard} className='bg-blue-600 text-white text-bold outline-none px-3 py-0.5 shrink-0'>copy</button>
          </div>


          <div className='flex text-sm gap-x-2'>
              <div className='flex item-center gap-x-1'>
                  <input type="range" min={6} max={100} value={length} onChange={(e) => setLength(e.target.value)} className='cursor-pointer'/>
                  <label>Lenght : {length}</label>
              </div>


            <div className='flex item-center gap-x-1'>
                  <input type="checkbox" defaultChecked ={noAllowed} id='numberInput' onChange={() =>{setNoAllowed((prev) =>!prev)}} />
                  <label htmlFor='numberInput'>Numbers</label>
              </div>


              <div className='flex item-center gap-x-1'>
                  <input type="checkbox" defaultChecked ={charAllowed} id='charInput' onChange={() =>{setNoAllowed((prev) =>!prev)}} />
                  <label htmlFor='charInput'>Characters</label>
              </div>


          </div>
      </div>
    </>
  )
}

export default App
