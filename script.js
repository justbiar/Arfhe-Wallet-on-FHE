document.addEventListener('DOMContentLoaded', function() {
  // Dropdown menü işlemleri
  const dropdown = document.querySelector('.dropdown');
  const dropbtn = document.getElementById('dropbtn');
  const dropdownContent = document.getElementById('myDropdown');

  dropbtn.addEventListener('click', function() {
      dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
  });

  dropdownContent.addEventListener('click', function(event) {
      if (event.target.tagName === 'A') {
          dropbtn.textContent = event.target.textContent;
          dropdownContent.style.display = 'none';
      }
  });

  // Menü buton işlemleri
  const menuButton = document.getElementById("menuButton");
  const navMenu = document.getElementById("navMenu");
  const closeMenu = document.getElementById("closeMenu");

  menuButton.addEventListener("click", function() {
      this.classList.toggle("active");
      navMenu.classList.toggle("open");
  });

  closeMenu.addEventListener("click", function() {
      menuButton.classList.remove("active");
      navMenu.classList.remove("open");
  });

  // Ana sayfada kullanıcı giriş yapmış mı kontrol edin
  const loggedIn = localStorage.getItem('loggedIn');
  if (loggedIn) {
      document.getElementById('mainContent').style.display = 'block';
  } else {
      window.location.href = 'login.html';
  }

  // Çıkış yap
  const walletLink = document.getElementById('walletLink');
  walletLink.addEventListener('click', function(event) {
      event.preventDefault();
      alert('Çıkış yapılıyor...');
      localStorage.removeItem('loggedIn');
      window.location.href = 'login.html';
  });

  // Parola sıfırlama
  const resetPasswordButton = document.getElementById('resetPasswordButton');
  resetPasswordButton.addEventListener('click', function() {
      const newPassword = prompt('Yeni şifreyi girin:');
      if (newPassword) {
          localStorage.setItem('walletPassword', newPassword);
          alert('Şifre başarıyla sıfırlandı.');
      }
  });

  // Cüzdan sıfırlama
  const resetWalletButton = document.getElementById('resetWalletButton');
  resetWalletButton.addEventListener('click', function() {
      if (confirm('Cüzdanı sıfırlamak istediğinizden emin misiniz? Tüm veriler silinecek.')) {
          localStorage.clear();
          alert('Cüzdan başarıyla sıfırlandı!');
          window.location.href = 'Mnemonic/create_wallet.html';
      }
  });
});
