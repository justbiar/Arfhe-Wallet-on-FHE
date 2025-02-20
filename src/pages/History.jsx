import { useState } from 'react'
import './History.css'
import Bottommenu from "../components/menu/Bottommenu";

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <div className="app-container">
      <div className='header'>
      <h1 className="app-title">Geçmiş Burada Olacak</h1>
      </div>
      </div>

      
     <Bottommenu />

    </>
  )
}

export default App