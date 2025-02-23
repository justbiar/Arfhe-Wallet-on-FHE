import { useState } from 'react'
import './Swap.css'
import Bottommenu from "../components/menu/Bottommenu";
import React from "react";
import Slipaj from '../components/menu/slipaj';


const Swap = () => {
  return (
    <div className="app-container">
      {/* Swap Box 1 - USDC */}
      <div className="swap-box usdc-box">1 USDC</div>

      {/* Swap Box 2 - BTC */}
      <div className="swap-box btc-box">0.0000002 BTC</div>

      {/* Slippage */}
      <div className="slippage">
        <div className="slippage-icon" />
        <span>Slipaj</span>
      </div>

      {/* Swap Simulation */}
      <div className="swap-simulation">Takas Simülasyonu</div>

      <div className='header'>
      <h1 className="app-title"></h1>
    <img src="/swap.png" alt='Logo' className='swap-logo' />
    </div>
    <div className='header'>
      <h1 className="app-title"></h1>
    <img src="/swap.png" alt='Logo' className='swap-logo2' />
    </div>
    <div className='header'>
      <h1 className="app-title"></h1>
  
    </div>


      {/* Bottom Navbar */}
      <div className="bottom-navbar">
        <div className="nav-icon" />
        <div className="nav-icon" />
        <div className="nav-icon" />
        <div className="nav-icon" />
      </div>
      <Bottommenu/>
      <Slipaj/>
    </div>
  );
};

export default Swap;
