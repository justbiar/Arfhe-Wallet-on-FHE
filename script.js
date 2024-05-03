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




