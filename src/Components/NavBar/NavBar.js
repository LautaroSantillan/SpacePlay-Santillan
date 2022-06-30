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
                    <NavLink to={`/category/CONSOLAS`} className="li">
                        CONSOLAS
                    </NavLink>
                    <NavLink to={`/category/JOYSTICKS`} className="li">
                        JOYSTICKS
                    </NavLink>
                    <NavLink to={`/category/ACCESORIOS`} className="li">
                        ACCESORIOS
                    </NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;
