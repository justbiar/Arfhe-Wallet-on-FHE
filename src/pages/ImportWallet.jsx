import { useState } from 'react'
import './ImportWallet.css'

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
      className="seed-input"
      placeholder="Gizli Kelimeleri Giriniz"
    />

    <input
      type="password"
      className="privatekey-input"
      placeholder="Gizli Anahtarı Giriniz"
    />

        <button className='import-wallet-button'>İçe Aktar</button>
      </div>
    </div>

    </>
  )
}

export default App