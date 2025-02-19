import { useState } from 'react'
import './Receiving.css'
import React from 'react'

const Receiving = () => {
  return (
    <div className="deposit-container">
      {/* Üst Bilgi (Network ve Asset) */}
      <div className="info-section">
        <div className="info-badge">Network : <span className="highlight">fhEVM</span></div>
        <div className="info-badge">Asset : Bitcoin</div>
      </div>

      {/* QR Kod Alanı */}
      <div className="qr-container">
        <img 
          src="/qrkod.png" 
          alt="QR Code" 
          className="qr-code" 
        />
      </div>

      {/* Cüzdan Adresi */}
      <div className="wallet-address">
        0xa25g5de5g451vvvd75q5frru5kdf5h5lDhrr
      </div>

      {/* Alt Menü */}
      <div className="bottom-menu">
        <button className="menu-btn">🏠</button>
        <button className="menu-btn">📊</button>
        <button className="menu-btn">🔁</button>
        <button className="menu-btn">🔍</button>
      </div>
    </div>
  );
};

export default Receiving;
