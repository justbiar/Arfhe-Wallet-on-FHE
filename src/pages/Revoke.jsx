import { useState } from 'react'
import './Revoke.css'
import Bottommenu from "../components/menu/Bottommenu";
import React from "react";


const Revoke = () => {
  const contracts = [
    { address: "0xa25g5de5g45fwvd75q5f...", value: "100 USDC" },
    { address: "0xa25g5de5g45fwvd75q5f...", value: "200 USDC" },
    { address: "0xa25g5de5g45fwvd75q5f...", value: "400 USDC" },
  ];

  return (
    <div className="container">
      {/* Üstteki icon */}
      <header className="header4">
        <div className="logo">⚖️</div>
      </header>

      {/* Ana içerik alanı */}
      <main className="main-content">
        {contracts.map((contract, index) => (
          <div key={index} className="contract-card">
            <p>
              <span className="label">Sözleşme adresi</span>{" "}
              <span className="address">{contract.address}</span>
              <span className="details">Detayları göster</span>
            </p>
            <button className="cancel-button">İzinleri iptal et</button>
          </div>
        ))}

        {/* Büyük detaylı kutu */}
        <div className="contract-detail">
          <p className="highlight-address">{contracts[0].address}</p>
          <p className="allowed-value">İzin verilen değer</p>
          <p className="value">{contracts[0].value}</p>
          <button className="cancel-button">İzinleri iptal et</button>
        </div>
      </main>

    <Bottommenu/>
    </div>
  );
};

export default Revoke;
