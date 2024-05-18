// network seçimi için
document.addEventListener('DOMContentLoaded', function() {
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
  });
  
  document.getElementById("menuButton").addEventListener("click", function() {
    var menu = document.getElementById("navMenu");
    this.classList.toggle("active");
    menu.classList.toggle("open");
});

document.getElementById("closeMenu").addEventListener("click", function() {
    var menu = document.getElementById("navMenu");
    document.getElementById("menuButton").classList.remove("active");
    menu.classList.remove("open");
});




// index.js

document.addEventListener('DOMContentLoaded', () => {
  const walletLink = document.getElementById('walletLink');
  walletLink.addEventListener('click', function(event) {
      event.preventDefault();
      
      const seedWords = localStorage.getItem('seedWords');
      const walletPassword = localStorage.getItem('walletPassword');
      
      if (seedWords && walletPassword) {
          // Cüzdan oluşturulmuşsa giriş sayfasına yönlendir
          window.location.href = 'login.html';
      } else {
          // Cüzdan oluşturulmamışsa cüzdan oluşturma sayfasına yönlendir
          window.location.href = 'Mnemonic/create_wallet.html';
      }
  });

  // Ana sayfada kullanıcı giriş yapmış mı kontrol edin
  const loggedIn = localStorage.getItem('loggedIn');
  if (loggedIn) {
      document.getElementById('mainContent').style.display = 'block';
  } else {
      window.location.href = 'login.html';
  }
});


 // Parola sıfırlama
 document.getElementById('resetPasswordButton').addEventListener('click', function() {
  const newPassword = prompt('Yeni şifreyi girin:');
  if (newPassword) {
      localStorage.setItem('walletPassword', newPassword);
      alert('Şifre başarıyla sıfırlandı.');
  }
});

// Cüzdan sıfırlama
document.getElementById('resetWalletButton').addEventListener('click', function() {
  if (confirm('Cüzdanı sıfırlamak istediğinizden emin misiniz? Tüm veriler silinecek.')) {
      localStorage.clear();
      alert('Cüzdan başarıyla sıfırlandı.');
      window.location.href = 'Mnemonic/create_wallet.html';
  }
})
