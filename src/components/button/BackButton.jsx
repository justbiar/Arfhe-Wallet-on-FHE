import React from "react";
import { useNavigate } from "react-router-dom";
import './BackButton.css'
import App from "../../App";
const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
  onClick={() => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/", { replace: true });
    }
  }}
  className="back-button"
>
  Geri
</button>
  );
};

export default BackButton;
