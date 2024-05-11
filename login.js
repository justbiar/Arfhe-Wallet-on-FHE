document.addEventListener('DOMContentLoaded', function() {
    const setPasswordButton = document.getElementById('setPasswordButton');
    const loginButton = document.getElementById('loginButton');
    const newPassword = document.getElementById('newPassword');
    const confirmPassword = document.getElementById('confirmPassword');
    const passwordField = document.getElementById('password');
    const resetPasswordButton = document.getElementById('resetPasswordButton');

    // Parola daha önce belirlenmiş mi kontrol et
    const savedPassword = localStorage.getItem('password');
    if (savedPassword) {
        // Parola daha önce belirlenmiş, parola belirleme kısmını gizle
        newPassword.style.display = 'none';
        confirmPassword.style.display = 'none';
        setPasswordButton.style.display = 'none';
        passwordField.style.display = 'block';
        loginButton.style.display = 'block';
    }

    // Parola belirleme işlevi
    setPasswordButton.addEventListener('click', function() {
        if (newPassword.value && newPassword.value === confirmPassword.value) {
            localStorage.setItem('password', newPassword.value);
            alert('Parolanız başarıyla belirlendi.');
            passwordField.style.display = 'block';
            loginButton.style.display = 'block';
            newPassword.style.display = 'none';
            confirmPassword.style.display = 'none';
            setPasswordButton.style.display = 'none';
        } else {
            alert('Parolalar uyuşmuyor, lütfen tekrar deneyiniz.');
        }
    });

    // Giriş yapma işlevi
    loginButton.addEventListener('click', function() {
        if (passwordField.value === localStorage.getItem('password')) {
            document.getElementById('login-Area').style.display = 'none';
            document.getElementById('mainContent').style.display = 'block';
            alert('Giriş başarılı! Hoş geldiniz.');
        } else {
            alert('Hatalı parola, lütfen tekrar deneyiniz.');
        }
    });

    // Parolayı sıfırlama işlevi
    resetPasswordButton.addEventListener('click', function() {
        if (confirm('Parolayı sıfırlamak istediğinizden emin misiniz?')) {
            localStorage.removeItem('password');
            alert('Parola sıfırlandı.');
        }
    });
});
