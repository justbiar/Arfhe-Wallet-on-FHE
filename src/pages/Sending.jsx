import React from "react";
import './Sending.css'
import Bottommenu from "../components/menu/Bottommenu";


const SendScreen = () => {
  return (
    <div className="send-screen">
      <label>Alıcı adres</label>
      <input type="text" value="0xa25g5de5g451vvvd75q5rru5kdf5h5lDHrr" readOnly />

      <label>Asset</label>
      <input type="text" value="Bitcoin" readOnly />

      <label>Ağ</label>
      <input type="text" value="Bitcoin" readOnly />

      <label>Miktar</label>
      <input type="text" value="1" readOnly />

      <div className="transfer-simulation">
        <p>Transfer simülasyonu</p>
        <span>Tahmini işlem ücreti : 0.000002 BTC</span>
        <span>Tahmini işlem süresi : 10 dakika</span>
      </div>

      <div className="fee-section">
        <img src="../settings.svg" alt="Settings" className="gear-icon" />
        <span>Fee</span>
      </div>

      <button className="send-button">Gönder</button>

      <Bottommenu />
    </div>
  );
};

export default SendScreen;
