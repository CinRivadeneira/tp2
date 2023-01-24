import React, { useState } from 'react'
import "../css/navbar.css";
import { Redirect } from 'react-router-dom';
import ReorderIcon from "@mui/icons-material/Reorder";


const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const [reorderIcon, setReorderIcon] = useState (false);

    return (
        <div className="navbar">
            <div> logo </div>
            <div className="menu">
                <div className="links" id={showLinks ? "hidden" : ""} >
                    <a href='/home'>Inicio</a>
                    <a href="/quienessomos">Quienes somos</a>
                    <a href="/contacto">Contacto</a>
                    <a href="/usuarios">Usuarios</a>
                </div>
                <button className="mobileMenu" onClick={() => setShowLinks(!showLinks)}> <ReorderIcon onClick ={() => setReorderIcon(!reorderIcon)} /> 
                </button>
            </div>
        </div>
    )
}

export default Navbar;