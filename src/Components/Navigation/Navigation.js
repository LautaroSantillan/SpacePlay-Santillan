//IMPORTS
import { useEffect, useState } from "react";
//Estilos
import "./Navigation.css";
//Logotipo
import logo from '../../assets/logoCirc.png';
//Sweet Alert
import swal from 'sweetalert';
//Carrito
import CartWidget from "../CartWidget/CartWidget";
//Icono
import { GiHamburgerMenu } from 'react-icons/gi';
//React-Router-DOM
import { Link } from "react-router-dom";

const Navigation = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const changeSize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', changeSize);
    });

    const onClick = () => {
        if(width <= 992)
        {
            swal({
                title: "CAMBIO DE PÁGINA!",
                text: "Cierre el menu de navegación",
                icon: "success",
                button: "Continuar"
            });
        }
    };

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
                    <Link to="/" className="Li" onClick={onClick}>
                        INICIO
                    </Link>
                    <Link to="/nosotros" className="Li" onClick={onClick}>
                        NOSOTROS
                    </Link>
                </ul>
            </nav>
            <CartWidget />
        </div>
    );
};

export default Navigation;