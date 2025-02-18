import React, { useState } from "react";
import "./ImportWallet.css";

const MnemonicDisplay = ({ words, title }) => {
  const [hover, setHover] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(words.join(" "));
    alert("Kelimeler kopyalandı!");
  };

  return (
    <div className="mnemonic-container">
      <button
        className="copy-button"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={copyToClipboard}
      >
        {hover ? "Kopyala" : "📋"}
      </button>
      <span className="mnemonic-title">{title}</span>
      <div className="mnemonic-box">
        {words.map((word, index) => (
          <span key={index} className="mnemonic-word">
            {index + 1}. {word}
          </span>
        ))}
      </div>
    </div>
  );
};

const PasswordInput = () => {
  const twelveWords = ["arf", "atuk", "duru", "kaban", "adalan", "irim", "iz", "oray", "dermek", "dilek", "elban", "ela"];
  const twentyFourWords = [
    "aydan", "devin", "kang", "sabak", "crack", "orga", "ming", "san", "balaban", "orgun", "babat", "edil", 
    "motun", "kelgin", "guna", "salaman", "azboy", "otgun", "oybat", "kuzu", "koyu", "kiyal", "ilgi", "otkun"
  ];

  return (
    <div className="app-container">
      <MnemonicDisplay words={twelveWords} title="12 Kelime" />
      <MnemonicDisplay words={twentyFourWords} title="24 Kelime" />
      <button className="wallet-button">Cüzdan Oluştur</button>
      <button className="back-button">Geri</button>
    </div>
  );
};

export default PasswordInput;
