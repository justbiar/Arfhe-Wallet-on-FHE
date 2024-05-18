document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const enteredPassword = document.getElementById('password').value;
        const savedPassword = localStorage.getItem('walletPassword');

        if (enteredPassword === savedPassword) {
            alert('Giriş başarılı!');
            localStorage.setItem('loggedIn', true); // Set the loggedIn flag
            window.location.href = 'index.html'; // Redirect to index page
        } else {
            alert('Yanlış şifre. Lütfen tekrar deneyin.');
        }
    });

    document.getElementById('resetWallet').addEventListener('click', function() {
        localStorage.removeItem('walletPassword');
        alert('Cüzdan sıfırlandı!');
        window.location.href = 'Mnemonic/create_wallet.html'; // Redirect to create wallet page
    });
});
