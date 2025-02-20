import React from "react"; 
import { Link } from "react-router";
import App from "../../App";

function CreateWalletButton(){
return (
    <div>
        <Link to='createwallet'>
<button className='create-wallet-button'>Cüzdan Oluştur</button></Link>
    </div>
)

}

export default CreateWalletButton