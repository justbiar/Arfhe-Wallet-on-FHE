import React from "react";
import "./CreateWith24Word.css";
import CreateWith24toImport from "../components/button/CreateWith24toImport";
import BackButton from "../components/button/BackButton";

const CreateWith24Word = () => {
  const words = [
    "aydan", "devin", "kang", "sabak", "crack", "orga", "ming", "san", "balaban", "orgun", "babat", "edil",
    "motun", "kelgin", "guna", "salaman", "azboy", "otgun", "oybat", "kuzu", "koyu", "kiyal", "ilgi", "otkun"
  ];

  return (
    <div className="container">
      <div className="card">
        <h2 className="header24"> 24 Kelime</h2>
        <div className="word-container">
          {words.map((word, index) => (
            <div key={index} className="word-box">
              {index + 1}. {word}
            </div>
          ))}
        </div>
        <CreateWith24toImport/>
        <BackButton/>
        
      </div>
    </div>
  );
};

export default CreateWith24Word;
