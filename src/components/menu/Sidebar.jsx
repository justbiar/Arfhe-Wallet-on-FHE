import React, { useState, useEffect } from "react";
import "./Sidebar.css"; // CSS dosyanı bağla

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // Aç/Kapat fonksiyonu
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Sayfanın herhangi bir yerine tıklayınca menüyü kapat
  const handleClickOutside = (event) => {
    if (isOpen && !event.target.closest(".sidebar") && !event.target.closest(".menu-button")) {
      setIsOpen(false);
    }
  };

  // ESC tuşuna basınca menüyü kapat
  const handleKeyDown = (event) => {
    if (isOpen && event.key === "Escape") {
      setIsOpen(false);
    }
  };

  // Event Listener ekle/kaldır
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* Menü Açma Butonu */}
      <button className="menu-button" onClick={toggleSidebar}>
        <img src="/menu.svg" alt="Menü" className="menu-icon" />
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Menü</h2>
          <button className="close-button" onClick={toggleSidebar}>X</button>
        </div>

        {/* Menü İçeriği */}
        <ul className="sidebar-menu">
          <li><a href="/account">Hesaplar</a></li>
          <li><a href="/explorer">Explorer</a></li>
          <li><a href="/settings">Ayarlar</a></li>
          <li><a href="/reset-wallet">Cüzdanı Sıfırla</a></li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
