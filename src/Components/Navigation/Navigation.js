//IMPORTS
//Estilos
import "./Navigation.css";
//Logotipo
import logo from '../../Images/logoCirc.png';
//Carrito
import CartWidget from "../CartWidget/CartWidget";
//Icono
import { GiHamburgerMenu } from 'react-icons/gi';
//React-Router-DOM
import { Link } from "react-router-dom";
//DEVELOPING
const Navigation = () => {
    return (
        <div className="header">
            <Link to="/" className="logo">
                <img src={logo} alt="iconoTienda" className="icono"/>
                <h1 className="nombre"><span>Space</span>Play</h1>
            </Link>
            <nav className="navbar-container">
                <label htmlFor="menu" className="nav-hamburguesa">
                    <GiHamburgerMenu />
                </label>
                <input type="checkbox" id="menu"/>
                <ul className="navbar nav-animaciones">
                    <Link to="/" className="Li">
                        INICIO
                    </Link>
                    <Link to="/nosotros" className="Li">
                        NOSOTROS
                    </Link>
                </ul>
            </nav>
            <CartWidget />
        </div>
    );
};

export default Navigation;