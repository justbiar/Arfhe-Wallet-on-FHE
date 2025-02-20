import React from "react";
import { Link } from "react-router-dom";
import './Bottommenu.css'

function Bottommenu (){

return (
   <div>
       
       <nav className="bottom-nav">
        <button className="nav-item">
        <Link to="/home">
        <img src="/Vector.svg" alt="Home" width="43.27" height="38.79" />
         </Link>
        </button>

        <button className="nav-item">
        <Link to="/portfolio">
        <img src="/portfolio.svg" alt="Home" width="45" height="45" />
         </Link>
        </button>

        <button className="nav-item">
        <Link to="/swap">
        <img src="/swap.svg" alt="Home" width="45" height="45" />
         </Link>
        </button>

        <button className="nav-item">
        <Link to="/research">
        <img src="/data.svg" alt="Data" width="45" height="45" />
         </Link>
        </button>
      </nav>
   </div>
)

}

export default Bottommenu