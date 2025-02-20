import { useState } from 'react'
import './Discovery.css'
import Bottommenu from "../components/Bottommenu";

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <div className="app-container">
      <div className='header'>
      <h1 className="app-title">Keşfet Ekranı Burada Olacak</h1>
      </div>
      </div>

      

      <Bottommenu />
    </>
  )
}

export default App