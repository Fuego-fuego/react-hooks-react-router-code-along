import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <NavLink to="/" className="nav-link"exact>
                Home
            </NavLink>
            <NavLink to="/about" className="nav-link"exact>
                About
            </NavLink>
            <NavLink to="/login" className="nav-link"exact>
                Login
            </NavLink>
        </div>
    );
}

export default NavBar;
