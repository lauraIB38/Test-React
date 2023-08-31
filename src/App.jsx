import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from './components/Clock'; 
import PicSum from './components/PicSum'; 

function App() {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(new Date());

  return (
    <div> 
      <Clock />
      <PicSum />
    </div>
  )
}

export default App
