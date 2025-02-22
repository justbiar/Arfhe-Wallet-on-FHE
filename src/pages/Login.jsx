import { useState } from 'react'
import './Login.css'
import BackButton from "../components/button/BackButton";
import { useNavigate } from 'react-router-dom';
function Login() {
  const [inputPassword, setInputPassword] = useState('');
  const navigate = useNavigate('');
  // Şifreyi kontrol etme fonksiyonu
  const handleLogin = () => {
    const savedPassword = localStorage.getItem("walletPassword");
    

    if (!savedPassword) {
      alert("Kayıtlı şifre bulunamadı!");
      return;
    }

    if (inputPassword === savedPassword) {
      alert("Giriş başarılı! Cüzdan açılıyor...");
      navigate("/home")
      // Burada yönlendirme yapabilirsin (örneğin, ana ekrana yönlendirme)
    } else {
      alert("Yanlış şifre! Lütfen tekrar deneyin.");
    }
  };

  return (
    <div className="login-container">
      <h2>Şifre Giriniz</h2>
      <input
        type="password"
        placeholder="Şifrenizi Giriniz"
        value={inputPassword}
        onChange={(e) => setInputPassword(e.target.value)}
      />
      <button onClick={handleLogin} className='login-btn'>Giriş Yap</button>
      <BackButton />
    </div>
    
  );
}

export default Login;
