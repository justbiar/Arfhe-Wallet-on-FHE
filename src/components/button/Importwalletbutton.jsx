import React from "react"; 
import { replace } from "react-router";
import { useNavigate } from "react-router"; 
import App from "../../App";
import './Importwalletbutton.css'

const ImportWalletButton = () => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate("/importwallet", { replace: true}); // Mutlak yol
    };
  
    return <button className="import-wallet-button" onClick={handleClick}>Cüzdanı İçe Aktar</button>;
  };

export default ImportWalletButton