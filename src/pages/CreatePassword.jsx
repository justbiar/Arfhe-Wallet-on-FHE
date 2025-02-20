import { useState } from 'react'
import './CreatePassword.css'
import BackButton from "../components/button/BackButton";
import Createwalletbutton from '../components/button/Createwalletbutton'

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
    <input
      type="password"
      className="password-input"
      placeholder="Şifrenizi Giriniz"
    />

    <input
      type="password"
      className="passwordreplay-input"
      placeholder="Şifrenizi Tekrar Giriniz"
    />

        
      </div>
      <div className='content'>
       
      <Createwalletbutton />
     </div>
     <BackButton/>
     
    </div>

    </>
  )
}

export default App