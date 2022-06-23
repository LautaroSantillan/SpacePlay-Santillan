import React from 'react'
import "./NavBar.css";
//React-Router-DOM
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className='navbar-category'>
            <nav>
                <ul className="NavBar">
                    <li><Link to="" className="Li">
                        CONSOLAS
                    </Link></li>
                    <li><Link to="" className="Li">
                        JOYSTICKS
                    </Link></li>
                    <li><Link to="" className="Li">
                        ACCESORIOS
                    </Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;
