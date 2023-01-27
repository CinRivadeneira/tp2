import React, { useState } from 'react'
import "../Css/Navbar.css";
import { Redirect } from 'react-router-dom';
import ReorderIcon from "@mui/icons-material/Reorder";
import logo from "../Img/Banner.png";

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const [reorderIcon, setReorderIcon] = useState(false);

    return (
        <div className="navbar">
            <div className='logo'>
                <img src={logo} />
            </div>
            <div className="menu">
                <div className="links" id={showLinks ? "hidden" : ""} >
                    <a href='/inicio'>Inicio</a>
                    <a href="/quienessomos">Quienes somos</a>
                    <a href="/contacto">Contacto</a>
                    <a href="/usuarios">Usuarios</a>
                </div>
                <button className="mobileMenu" onClick={() => setShowLinks(!showLinks)}> <ReorderIcon onClick={() => setReorderIcon(!reorderIcon)} />
                </button>
            </div>
        </div>
    )
}

export default Navbar;