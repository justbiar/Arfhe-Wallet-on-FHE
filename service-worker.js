chrome.action.onClicked.addListener (tab => {
    chrome.scripting.executeScript ({
        target: {tabId: tab.id} ,
        func: () => {
            alert ('Hello welcome to the Arfhe Wallet on FHE');
        }
    });
});

function updateText(text) {
    document.getElementById('dropbtn').textContent = text;
    toggleDropdown();  // Menüyü kapat
  }
  
  function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  }
  