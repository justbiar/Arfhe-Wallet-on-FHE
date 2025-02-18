import { useState } from 'react'
import './CreateNewWallet.css'
import Createwalletbutton from '../components/Createwalletbutton'
import Importwalletbutton from '../components/Importwalletbutton'
import CreateWith12Word from '../components/Createwith12word'
import CreateWith24Word from '../components/Createwith24word'

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
       
        <CreateWith12Word />
        <CreateWith24Word />
      </div>
    </div>

    </>
  )
}

export default App