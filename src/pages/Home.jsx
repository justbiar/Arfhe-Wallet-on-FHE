import { useState } from 'react'
import './Home.css'
import React from "react";
import Homesendbutton from '../components/Homesendbutton';
import Homereceivebutton from '../components/Homereceivingbutton';


const Home = () => {
  return (
    <div className="dashboard-container">
      {/* Üst kısım - Hesap ve Network */}
      <div className="top-section">
        <h3 className="account-title">Hesap</h3>
        <p className="account-name">biar.arf</p>
        <div className="network-badge">Network : <span className="network-name">fhEVM</span></div>
        <div className="menu-icon">⋮</div>
      </div>

      {/* Profil Fotoğrafı ve Bakiye */}
      <div className="profile-container">
        <img src="public/image2.png" alt="Profile" className="profile-image" />
        <h1 className="balance">1.501,12₺</h1>
      </div>

      {/* Grafik Alanı */}
      <div className="chart-container">
        <div className="chart">
          {/* Grafik Simülasyonu (Gerçek grafik yerine placeholder) */}
        </div>
      </div>

      {/* İşlem Butonları */}
      <div className="action-buttons">
      <Homereceivebutton/>
        <button className="action-btn">Keşfet</button>
        <button className="action-btn">Geçmiş</button>
        <button className="action-btn">İptal</button>
        <Homesendbutton />
        
      </div>

      {/* Varlıklar */}
      <div className="assets-container">
        <h2 className="assets-title">Assets</h2>
        <div className="asset-item">1 ARF</div>
        <div className="asset-item">1 ETH</div>
        <div className="asset-item">1 BTC</div>
        <div className="asset-item">1 SOL</div>
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

export default Home;
