import { useState } from 'react'
import './FirstLogin.css'
import Createwalletbutton from '../components/button/Createwalletbutton'
import Importwalletbutton from '../components/button/Importwalletbutton'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    
    <div className="app-container">
      <div className='header'>
      <h1 className="app-title">Arfhe Wallet</h1>
    <img src="/Arfhe-logo.png" alt='Logo' className='app-logo' />
      

      </div>

      <div className='content'>
       
        <Importwalletbutton />
        <Createwalletbutton />
      </div>
    </div>

    </>
  )
}

export default App