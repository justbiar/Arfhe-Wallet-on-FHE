import { useState } from 'react'
import './CreatePassword.css'
import BackButton from "../components/button/BackButton";
import Createwalletbutton from '../components/button/Createwalletbutton'
import { useNavigate } from 'react-router-dom';

function App() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  
  // Şifreyi kaydetme fonksiyonu
  const handleSavePassword = () => {
    if (password !== confirmPassword) {
      alert("Şifreler eşleşmiyor!");
      return;
    }
    localStorage.setItem("walletPassword", password);
    alert("Şifre başarıyla kaydedildi!");
    navigate("/login")
  };

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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            className="passwordreplay-input"
            placeholder="Şifrenizi Tekrar Giriniz"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className='content'>
          <button onClick={handleSavePassword} className="save-password-btn">Şifreyi Kaydet</button>
        </div>

        <BackButton/>
      </div>
    </>
  )
}

export default App;
