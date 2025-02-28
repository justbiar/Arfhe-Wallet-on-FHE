import React from "react"; 
import { useNavigate } from "react-router-dom";
import App from "../../App";

function CreateWith12toImport (){
    const navigate = useNavigate();

return (
   <div>
       
<button className='create-to-import-button'
onClick={() => {
   navigate('/createwallet/createwith12/importwallet')
}}
>Cüzdan Oluştur</button>
   </div>
)

}

export default CreateWith12toImport 