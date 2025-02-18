import React from "react";
import "./CreateWith12Word.css";
import CreateWith12toImport from "../components/CreateWith12toImport";
import BackButton from "../components/BackButton";



const CreateWith12Word = () => {
  const words = [
    "aydan", "devin", "kang", "sabak", "crack", "orga",
    "ming", "san", "balaban", "orgun", "babat", "edil"
  ];

  return (
    <div className="app-container">
      <div className="card">
        <h2 className="header"> 12 Kelime</h2>
        <div className="word-container">
          {words.map((word, index) => (
            <div key={index} className="word-box">
              {index + 1}. {word}
            </div>
          ))}
        </div>
        <CreateWith12toImport />
        <BackButton />
      </div>
    </div>
  );
};

export default CreateWith12Word;
