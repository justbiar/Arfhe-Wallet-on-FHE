import React from "react";
import { useNavigate } from "react-router-dom";
import './Homesendbutton.css'

function Homesendbutton(){
    const navigate = useNavigate();

    return (
        <div>
<button 
onClick={() =>{
    navigate('/home/send')
}}
className="action-btn">Gönder </button>
         </div>
    )}




    export default Homesendbutton;