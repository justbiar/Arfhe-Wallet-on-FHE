import React from "react";
import './Sending.css'
import Bottommenu from "../components/menu/Bottommenu";


const SendScreen = () => {
  return (
    <div className="app-container">
      <label>Alıcı adres</label>
      <input type="text" placeholder=" 0xa25g5de5g451vvvd75q5frru5kdf5h5lDhrr"/>

      <label for="assest">Assest</label>
<select id="assest">
    <option value="bitcoin">Bitcoin</option>
    <option value="etherium">Etherium</option>
    <option value="solana">Solana</option>
    <option value="arf">Arf</option>
</select>

      <label for="network">Network</label>
<select id="network">
    <option value="bitcoin">Bitcoin</option>
    <option value="etherium">ERC20</option>
    <option value="bnb">BEP20</option>
    <option value="solana">Solana</option>
    <option value="arf">Arf</option>
</select>

      <label>Miktar</label>
      <input type="number" min={"0"} placeholder="$"/>

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
