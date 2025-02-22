import { useState, useEffect } from 'react'
import './Login.css'
import BackButton from "../components/button/BackButton";
import { useNavigate } from 'react-router-dom';
function Login() {
  const [inputPassword, setInputPassword] = useState('');
  const navigate = useNavigate('');

  useEffect(() => {
    // Eğer zaten giriş yapılmışsa, direkt ana sayfaya yönlendir
    if (localStorage.getItem("isLoggedIn") === "true") {
      navigate("/home");
    }
  }, [navigate]);

  // Şifreyi kontrol etme fonksiyonu
  const handleLogin = () => {
    const savedPassword = localStorage.getItem("walletPassword");
    

    if (!savedPassword) {
      alert("Kayıtlı şifre bulunamadı!");
      return;
    }

    if (inputPassword === savedPassword) {
      localStorage.setItem("isLoggedIn", "true");
      alert("Giriş başarılı! Cüzdan açılıyor...");
      navigate("/home")
      // Burada yönlendirme yapabilirsin (örneğin, ana ekrana yönlendirme)
    } else {
      alert("Yanlış şifre! Lütfen tekrar deneyin.");
    }
  };

  return (
    <div className="login-container">
      <img src="/Arfhe-logo.png" alt='Logo' className='app-logo' />
      <h2>Şifre Giriniz</h2>
      <input
      className='login-import-btn'
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
