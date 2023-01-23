import React from 'react'
import "../css/navbar.css";


const Navbar = () => {
    return (
        <div className="navbar">
            <h1> logo </h1>
            <div className="leftSide">
                <div className="links">
                    <a href='/home'>Inicio</a>
                    <a href="/quienessomos">Quienes somos</a>
                    <a href="/contacto">Contacto</a>
                    <a href="/usuarios">Usuarios</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar