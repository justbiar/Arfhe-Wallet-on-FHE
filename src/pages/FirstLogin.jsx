import { useState } from 'react'
import './FirstLogin.css'

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
        <button className='create-wallet-button'>Cüzdan Oluştur</button>
        <button className='import-wallet-button'>İçe Aktar</button>
      </div>
    </div>

    </>
  )
}

export default App