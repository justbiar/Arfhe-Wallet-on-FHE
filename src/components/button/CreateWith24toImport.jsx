import React from "react"; 
import { useNavigate } from "react-router-dom";


function CreateWith24toImport (){
    const navigate = useNavigate();

return (
   <div>
       
<button className='create-24-buttonimport'
onClick={() => {
   navigate('/createwallet/createwith24/importwallet')
}}
>Cüzdan Oluştur</button>
   </div>
)

}

export default CreateWith24toImport 