import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar">
            <h3 className='logo'>Logo</h3>
            <ul className='nav-links'>
                 <link to="/" className='Inicio'></link>
                     <li>Inicio</li>
                 <link to="/quienessomos" className='QuienesSomos'></link>
                    <li>Quienes somos</li>
                 <link to="/contacto" className='Contacto'></link>
                    <li>Contacto</li>
                 <link to="/usuarios" className='Usuarios'></link>
                    <li>Usuarios</li>
            </ul>
        </nav>
    )
}

export default Navbar