import { useState } from 'react'
import './Swap.css'
import Bottommenu from "../components/menu/Bottommenu";

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <div className="app-container">
      <div className='header'>
      <h1 className="app-title">Takas Burada Olacak</h1>
      </div>
      </div>

      <div><Bottommenu /></div>


    </>
  )
}

export default App