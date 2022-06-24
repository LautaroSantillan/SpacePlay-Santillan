import "./Navigation.css";
import logo from '../../images/logoCirc.png';
import CartWidget from "../CartWidget/CartWidget";
import { GiHamburgerMenu } from 'react-icons/gi';
//React-Router-DOM
import { Link } from "react-router-dom";

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
                    <li><Link to="/" className="Li">
                        INICIO
                    </Link></li>
                    <li><Link to="/nosotros" className="Li">
                        NOSOTROS
                    </Link></li>
                    <li><Link to="/contacto" className="Li">
                        CONTACTO
                    </Link></li>
                </ul>
            </nav>
            <CartWidget />
        </div>
    );
};

export default Navigation;