import React, { useState, useEffect } from "react";
import "./Sidebar.css"; // Eğer ekstra stil gerekiyorsa

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Butonu `body` içine ekleyerek tüm div etkilerini kaldırıyoruz
    const button = document.querySelector(".menu-button");
    document.body.appendChild(button);
  }, []);

  return (
    <>
      {/* Menü Açma Butonu (Figma'dan Gelen İkon) */}
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
          <li><a href="/import-wallet">İçe Aktar</a></li>
          <li><a href="/create-wallet">Yeni Cüzdan Oluştur</a></li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
