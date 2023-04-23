import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Axios from "axios"
import './App.css'
import Quora from './components/Quora'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     {/* <h1>hello</h1> */}
  <Quora />
    </div>
  )
}

export default App
