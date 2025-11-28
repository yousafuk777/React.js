import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [copied, setCopied] = useState(false)

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*(){}[]+=~`"

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length)
      pass += str.charAt(charIndex)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)

    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-start py-8 relative">

    
      <div
        className={`absolute top-4 transition-opacity duration-500 ${
          copied ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="text-green-400 text-sm font-semibold bg-gray-800 px-4 py-2 rounded shadow">
          Copied!
        </span>
      </div>

     
      <div className='w-full max-w-md shadow-md rounded-lg px-4 py-8 bg-gray-800 text-orange-500 mt-12'>

        <h1 className='text-white text-center my-3'>Password Generator</h1>

      
        <div className='flex items-center shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />

          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 hover:bg-blue-800 text-white px-3 py-0.5 shrink-0 transition-colors ml-2'
          >
            Copy
          </button>
        </div>

        {/* Controls: length and checkboxes */}
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              checked={numberAllowed}
              id='numberInput'
              onChange={() => setNumberAllowed(prev => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              checked={charAllowed}
              id='charAllowed'
              onChange={() => setCharAllowed(prev => !prev)}
            />
            <label htmlFor="charAllowed">Characters</label>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
