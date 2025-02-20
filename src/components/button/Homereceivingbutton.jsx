import React from "react";
import { useNavigate } from "react-router-dom";
import './Homereceivingbutton.css'
import App from "../../App";
function Homereceivebutton(){
    const navigate = useNavigate();

    return (
        <div>
<button 
onClick={() =>{
    navigate('/home/Receiving')
}}
className="action-btn2">Yatır </button>
         </div>
    )}




    export default Homereceivebutton;