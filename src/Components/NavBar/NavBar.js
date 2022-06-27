//IMPORTS
import React from 'react';
//Estilos
import "./NavBar.css";
//React-Router-DOM
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className='navbar-category'>
            <nav>
                <ul className="NavBar">
                    <li><NavLink to={`/category/CONSOLAS`} className="Li">
                        CONSOLAS
                    </NavLink></li>
                    <li><NavLink to={`/category/JOYSTICKS`} className="Li">
                        JOYSTICKS
                    </NavLink></li>
                    <li><NavLink to={`/category/ACCESORIOS`} className="Li">
                        ACCESORIOS
                    </NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;
