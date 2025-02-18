import React from "react"; 
import { Link } from "react-router";
import App from "../App";

function ImportWalletButton(){
return (
    <div>
        <Link to='importwallet'>
<button className='import-wallet-button'>İçe Aktar</button></Link>
    </div>
)

}

export default ImportWalletButton