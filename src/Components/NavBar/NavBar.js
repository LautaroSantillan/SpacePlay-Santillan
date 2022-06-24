//IMPORTS
import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
//Estilos
import "./NavBar.css";
//React-Router-DOM
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const [prodCategory, setProdCategory] = useState([]);

	useEffect(() => {
        axios(`https://62aa950c371180affbd78121.mockapi.io/api/prod-ps5/articulos`).then((res) =>
            setProdCategory(res.data),
        );
    }, []);

	console.log('Prod-Category:', prodCategory);

    return (
        <div className='navbar-category'>
            <nav>
                <ul className="NavBar" key={prodCategory.category}>
                    <li><NavLink to={`/category/${prodCategory.category}`} className="Li">
                        CONSOLAS
                    </NavLink></li>
                    <li><NavLink to={`/category/${prodCategory.category}`} className="Li">
                        JOYSTICKS
                    </NavLink></li>
                    <li><NavLink to={`/category/${prodCategory.category}`} className="Li">
                        ACCESORIOS
                    </NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;
