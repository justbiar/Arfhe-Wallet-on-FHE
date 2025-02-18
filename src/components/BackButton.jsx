import React from "react";
import { useNavigate } from "react-router-dom";
import './BackButton.css'

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className="back-button">
      Geri
    </button>
  );
};

export default BackButton;
