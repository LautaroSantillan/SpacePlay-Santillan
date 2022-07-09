//IMPORTS
import React from 'react';
//Estilos
import "./NavBar.css";
//React-Router-DOM
import { Link } from "react-router-dom";
//DEVELOPING
const NavBar = () => {
    return (
        <div className='navbar-category'>
            <nav>
                <ul className="NavBar">
                    <Link to='/category/consola' className="li">
                        CONSOLA
                    </Link>
                    <Link to='/category/joysticks' className="li">
                        JOYSTICKS
                    </Link>
                    <Link to='/category/accesorios' className="li">
                        ACCESORIOS
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;
