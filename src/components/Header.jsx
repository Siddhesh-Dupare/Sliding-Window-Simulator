
import React from "react";
import { NavLink } from 'react-router-dom'

import '../styles/header.css'

function Header() {
    return (
        <>
            <nav>
                <ul>
                    <h1>
                        <a href="./">Sliding Window Protocol</a>
                    </h1>

                    <div className="nav-links">
                        <NavLink to="/" ><li>Home</li></NavLink>
                        {/* <NavLink to="/concept" ><li>Concept</li></NavLink> */}
                        <NavLink to="stop-wait" ><li>Stop&Wait</li></NavLink>
                        <NavLink to="/go-back-n" ><li>Go Back N</li></NavLink>
                        <NavLink to="/selective-repeat" ><li>Selective Repeat</li></NavLink>
                    </div>
                </ul>
            </nav>
        </>
    );
}

export default Header;