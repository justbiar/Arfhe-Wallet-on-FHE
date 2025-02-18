import React from "react"; 
import { useNavigate } from "react-router-dom";
import App from "../App";
import './Createwith12word.css'

function CreateWith12Word (){
     const navigate = useNavigate();

return (
    <div>
        
<button className='create-12-button'
onClick={() => {
    navigate('/createwallet/createwith12')
}}
>12 Kelime İle Oluştur</button>
    </div>
)

}

export default CreateWith12Word