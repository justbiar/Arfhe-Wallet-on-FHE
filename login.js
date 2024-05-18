// login.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const password = document.getElementById('password').value;
    const storedPassword = localStorage.getItem('walletPassword');
    
    if (password === storedPassword) {
        alert('Giriş başarılı!');
        // Kullanıcı giriş durumunu kaydet
        localStorage.setItem('loggedIn', 'true');
        // Ana sayfaya yönlendir
        window.location.href = 'index.html';
    } else {
        alert('Yanlış şifre!');
        
    }
});

document.getElementById('resetWallet').addEventListener('click', function() {
    if (confirm('Cüzdanı sıfırlamak istediğinizden emin misiniz? Tüm veriler silinecek.')) {
        localStorage.clear();
        alert('Cüzdan başarıyla sıfırlandı.');
        window.location.href = 'Mnemonic/create_wallet.html';
    }
});
