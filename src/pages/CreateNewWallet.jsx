import { useState } from 'react'
import './CreateNewWallet.css'
import Createwalletbutton from '../components/button/Createwalletbutton'
import Importwalletbutton from '../components/button/Importwalletbutton'
import CreateWith12Word from '../components/button/Createwith12word'
import CreateWith24Word from '../components/button/Createwith24word'
import BackButton from "../components/button/BackButton";

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    
    <div className="app-container">
      <div className='header1'>
      <h1 className="app-title">Arfhe Wallet</h1>
    <img src="/Arfhe-logo.png" alt='Logo' className='app-logo' />
      

      </div>

      <div className='content'>
       
        <CreateWith12Word />
        <CreateWith24Word />
        <BackButton />
      </div>
    </div>

    </>
  )
}

export default App