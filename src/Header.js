import React from "react";
import './Header.css';

import logo from "./AK_logo.png";
const Header=()=>{

    return(
        <div className="header">
            <img className ="header_image" src={logo}  alt="AK logo" />
            <h1>Amar Keep</h1>
        </div>
    )
}

export default Header;