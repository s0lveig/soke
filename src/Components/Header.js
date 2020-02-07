import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const Header = () => {
    return(
        <header id="top">
            <nav id="menu" className="navbar navbar-expand-lg text-white mt-1">
            <Link id="logo" to="/" className="navbar-brand text-reset h5 align-self-start">SOKE</Link>
            
                <div className="navbar-nav ml-auto">
                    <NavLink to="/design" activeClassName="active" className="nav-link text-reset h5">Design</NavLink>
                    <NavLink to="/development" activeClassName="active" className="nav-link text-reset h5">Development</NavLink>
                    <NavLink to="/photography" activeClassName="active" className="nav-link text-reset h5">Photography</NavLink>
                </div>
            </nav>
        </header>
    )
}
export default Header;