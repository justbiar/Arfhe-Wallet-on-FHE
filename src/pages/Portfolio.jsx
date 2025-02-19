import { useState } from 'react'
import './Portfolio.css'
import Bottommenu from "../components/Bottommenu";

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <div className="app-container">
      <div className='header'>
      <h1 className="app-title">Portfolio Burada Olacak</h1>
      
      
      </div>




      
      <Bottommenu />
      </div>
    </>
  )
}

export default App