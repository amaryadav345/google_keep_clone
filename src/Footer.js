import React from "react";
import "./Footer.css";
const Footer=()=>{
    const year= new Date().getFullYear();
    return(
        <div className="footer">
           <h1 className="footer_data">Amar Copywrite @ {year}</h1>
        </div>
    )
}


export default Footer;