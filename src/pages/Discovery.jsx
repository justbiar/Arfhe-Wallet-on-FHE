import { useState } from 'react'
import './Discovery.css'
import Bottommenu from "../components/menu/Bottommenu";
import React from "react";


const Discovery = () => {
  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">
        <h1 className="app-title"></h1>
        <img src="/discorvery.png" alt='Logo' className='discovery-logo' />
          </div> {/* Üstteki yuvarlak logo */}
      </header>

      <main className="main-content">
        {/* 3x3 grid halinde ikonlar */}
        <div className="icon-grid">
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="icon">
              🌐 {/* Globe simgesi */}
            </div>
          ))}
        </div>

        {/* Reklam kutuları */}
        <div className="ad-box">Uygulama reklamı</div>
        <div className="ad-box">Uygulama reklamı</div>
 
        
      </main>

    <Bottommenu/>
    </div>
  );
};

export default Discovery;
