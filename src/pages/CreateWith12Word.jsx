import React from "react";
import "./CreateWith12Word.css";
import ImportWalletButton from "../components/Importwalletbutton";

const CreateWith12Word = () => {
  const words = [
    "aydan", "devin", "kang", "sabak", "crack", "orga",
    "ming", "san", "balaban", "orgun", "babat", "edil"
  ];

  return (
    <div className="app-container">
      <div className="card">
        <h2 className="header">📱 12 Kelime</h2>
        <div className="word-container">
          {words.map((word, index) => (
            <div key={index} className="word-box">
              {index + 1}. {word}
            </div>
          ))}
        </div>
        <ImportWalletButton />
        <button className="back-button">Geri</button>
      </div>
    </div>
  );
};

export default CreateWith12Word;
