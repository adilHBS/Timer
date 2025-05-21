import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [hours, sethours] = useState(0)
  const [mins, setmins] = useState(0)
  const [sec, setsec] = useState(0)
  

  const handelStart = () => {
    setInterval(() => {
      setsec((prev) => {
        if (prev === 59) {
          setmins((prev) => {
            if (prev === 59) {
              sethours((prev) => prev + 1)
              return 0
            }
            return prev + 1
          })
          return 0
        }
        return prev + 1
      })
    }, 1000)
  
  }
  
  
  const handelReset = () => {
    sethours(0)
    setmins(0)
    setsec(0)
  }
  
  

  return (
   <div>

    <h1>Timer</h1>
    <h2 >{hours}:{mins}:{sec}</h2>
    <button onClick={handelStart}>Start</button>
    
    <button onClick={handelReset}>Reset</button>
   </div>
  )
}

export default App
