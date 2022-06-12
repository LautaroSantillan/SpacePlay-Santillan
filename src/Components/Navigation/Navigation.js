import "./Navigation.css";
import logo from '../../images/logoCirc.png';
import CartWidget from "../CartWidget/CartWidget";

const Navigation = () => {
    return (
        <div className="header">
            <a href="index.html" className="logo">
                <img src={logo} alt="iconoTienda" className="icono"/>
                <h1 className="nombre"><span>Space</span>Play</h1>
            </a>
            <nav>
                <input type="checkbox" id="menu"/>
                <label htmlFor="menu" className="nav-hamburguesa">
                <i className="fas fa-bars"></i>
                </label>
                <ul className="navbar nav-animaciones">
                <li><a href="">INICIO</a></li>   
                <li><a href="">PRODUCTOS</a></li>
                <li><a href="">CONTACTO</a></li>
                </ul>
            </nav>
            <CartWidget />
        </div>
    );
};

export default Navigation;