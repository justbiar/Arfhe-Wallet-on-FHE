import { useState } from 'react'
import './Research.css'
import Bottommenu from "../components/menu/Bottommenu";

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <div className="app-container">
      <div className='header'>
      <h1 className="app-title">VERY SOON</h1>
     
      </div>
      
      </div>

      <Bottommenu />
      

    </>
  )
}

export default App