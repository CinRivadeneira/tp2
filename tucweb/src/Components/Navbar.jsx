import React, {useState} from 'react'
import "../css/navbar.css";
import { TfiAlignJustify} from "react-icons/tfi";



const Navbar = () => {
    const [showLinks, setShowLinks] = useState (false);

    return (
        <div className="navbar">
            <h1> logo </h1>
            <div className="leftSide">
                <div className="links" id={showLinks ? "hidden" : ""} >
                    <a href='/home'>Inicio</a>
                    <a href="/quienessomos">Quienes somos</a>
                    <a href="/contacto">Contacto</a>
                    <a href="/usuarios">Usuarios</a>
                </div>
                <TfiAlignJustify onClick={() => setShowLinks(!showLinks)}> menu </TfiAlignJustify>
            </div>
        </div>
    )
}

export default Navbar