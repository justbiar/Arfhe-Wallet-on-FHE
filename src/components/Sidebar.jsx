import React, { useState } from "react";
import "./Sidebar.css"; // CSS dosyanı bağla

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Aç/kapa yap
  };

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
          <button className="close-button" onClick={toggleSidebar}>
           X
          </button>
        </div>

        {/* Menü İçeriği */}
        <ul className="sidebar-menu">
          <li><a href="/accounts">Hesaplar</a></li>
          <li><a href="/explorer">Explorer</a></li>
          <li><a href="/settings">Ayarlar</a></li>
          <li><a href="/reset-wallet">Cüzdanı Sıfırla</a></li>
          <li><a href="/importwallet">İçe Aktar</a></li>
          <li><a href="/create-wallet">Yeni Cüzdan Oluştur</a></li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
