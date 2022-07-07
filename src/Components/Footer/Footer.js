//IMPORTS
import React from 'react';
import logo from '../../images/logoCirc.png';
import { FaWhatsapp } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
//Estilos
import "./Footer.css";
//React-Router-DOM
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
                <div className="social">
                    <Link to="/">
                        <img src={logo} alt="iconoTienda" width={50}/>
                    </Link> 
                    <Link to="/"><FaWhatsapp className='icon'/></Link>
                    <Link to="/"><FaFacebook className='icon'/></Link>
                    <Link to="/"><FaInstagram className='icon'/></Link>               
                </div>
                <div className="navbar-footer">
                    <li>
                        <Link to="/">INICIO</Link>
                    </li>
                    <li>
                        <Link to="/Nosotros">NOSOTROS</Link>
                    </li>
                    <li>
                        <Link to="/Contacto">CONTACTO</Link>
                    </li>            
                </div>
                <div className="copyright">
                    <small>&copy; 2022 <b>SPACEPLAY</b> - Todos los Derechos Reservados.</small>
                </div>
        </div>
    )
}

export default Footer;
