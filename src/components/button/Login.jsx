import React from "react"; 
import { Link } from "react-router";
import './Login.css'
function Login(){
return (
    <div>
        <Link to='/home'>
<button className='login-button'>Giriş Yap</button></Link>
    </div>
)

}

export default Login