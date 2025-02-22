import React, { useState } from "react";
import "./slipaj.css"; // CSS dosyanı bağla
import SlippageSlider from "../button/SlippageSlider";

function Slipaj() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Aç/kapa yap
  };

  return (
    <>
      {/* Menü Açma Butonu */}
      <button className="settings-logo" onClick={toggleSidebar}>
        <img src="/settings.svg" alt="Menü" className="menu-icon" />
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Slipaj</h2>
          <button className="close-button" onClick={toggleSidebar}>
           X
          </button>
        </div>

      <SlippageSlider/>
      </div>
    </>
  );
}

export default Slipaj;
