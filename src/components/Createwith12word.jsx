import React from "react"; 
import { Link } from "react-router";
import App from "../App";
import './Createwith12word.css'

function CreateWith12Word(){
return (
    <div>
        <Link to='/createwallet/createwith12'>
<button className='create-12-button'>12 Kelime İle Oluştur</button></Link>
    </div>
)

}

export default CreateWith12Word