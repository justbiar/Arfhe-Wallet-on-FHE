import React from "react"; 
import { useNavigate } from "react-router-dom";
import App from "../../App";

function CreateWith24toImport (){
    const navigate = useNavigate();

return (
   <div>
       
<button className='create-24-button'
onClick={() => {
   navigate('/createwallet/createwith24/importwallet')
}}
>Cüzdan Oluşturr</button>
   </div>
)

}

export default CreateWith24toImport 