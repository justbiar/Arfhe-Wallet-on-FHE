import React from "react"; 
import { useNavigate } from "react-router-dom";
import App from "../App";
import './Createwith24word.css'

function CreateWith24Word (){
     const navigate = useNavigate();

return (
    <div>
        
<button className='create-24-button'
onClick={() => {
    navigate('/createwallet/createwith24')
}}
>24 Kelime İle Oluştur</button>
    </div>
)

}

export default CreateWith24Word