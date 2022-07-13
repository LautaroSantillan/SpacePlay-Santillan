//IMPORTS
import React from 'react';
//Logotipo
import logo from '../../Images/logoCirc.png';
//Iconos
import { FaWhatsapp } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
//Estilos
import "./Footer.css";
//React-Router-DOM
import { Link } from "react-router-dom";
//DEVELOPING
function Footer() {
    return (
        <div className="footer">
                <div className="social">
                    <Link to="/">
                        <img src={logo} alt="iconoTienda" width={50}/>
                    </Link> 
                    <a href='https://api.whatsapp.com/send?phone=+5491165799996&text=Hola Lautaro, me queria contactar con vos...' target="_blank" rel='noopener noreferrer' className="whatsapp"><FaWhatsapp className='icon'/></a>
                    <a href='https://www.linkedin.com/in/lautaro-ezequiel-santillan-65973b205/' target="_blank" rel='noopener noreferrer' className="linkedin"><FaLinkedin className='icon'/></a>
                    <a href='https://www.instagram.com/lautaroo.santillan/' target="_blank" rel='noopener noreferrer' className="instagram"><FaInstagram className='icon'/></a>               
                </div>
                <div className="navbar-footer">
                    <li>
                        <Link to="/">INICIO</Link>
                    </li>
                    <li>
                        <Link to="/nosotros">NOSOTROS</Link>
                    </li>         
                </div>
                <div className="copyright">
                    <small>&copy; 2022 <b>SPACEPLAY</b> - Todos los Derechos Reservados.</small>
                </div>
        </div>
    )
}

export default Footer;
