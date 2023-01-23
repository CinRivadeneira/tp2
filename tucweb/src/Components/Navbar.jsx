import React, {useState} from 'react'
import "../css/navbar.css";


const Navbar = () => {
    const [showLinks, setShowLinks] = useState (true);

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
                <button> open </button>
            </div>
        </div>
    )
}

export default Navbar