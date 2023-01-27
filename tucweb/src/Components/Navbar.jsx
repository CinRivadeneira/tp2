import React from 'react';
import "../Css/Navbar.css"
import Banner from "../Img/Banner.png";
import Hamburger from "../Img/Icons/Hamburger.png";
import Close from "../Img/Icons/Close.png";

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='logo'>
                <img src={Banner} />
            </div>
            <button className='open-menu' aria-label="Abrir menú">
                <img src= {Hamburger} />
            </button>
            <button className='close-menu' aria-label="Cerrar menú">
                <img src= {Close} />
            </button>
            <div className='Menu'>
                <a href='/inicio'>Inicio</a>
                <a href="/quienessomos">Quienes somos</a>
                <a href="/contacto">Contacto</a>
                <a href="/usuarios">Usuarios</a>
            </div>
        </div>
    )
}

export default Navbar;