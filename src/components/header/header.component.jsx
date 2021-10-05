import React from 'react';
import './header.styles.css'
import { FaReact } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {

    return (
        <nav className="navbar ">
            <div className="container-fluid">
                <span className="navbar-brand">

                    {/* <Link to='/'>< FaReact style={{ width: '40px', height: '40px' }} /></Link> */}
                </span>
                <ul className="nav justify-content-end">

                    <li className="nav-item">

                        <NavLink activeClassName="active" className="nav-link" to='/home'>HOME</NavLink>
                    </li>
                    <li className="nav-item">

                        <NavLink activeClassName="active" className="nav-link" to="/posts">POSTS</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/about">ABOUT</NavLink>
                    </li>

                </ul>
            </div>

        </nav>
    );
}

export default Header;