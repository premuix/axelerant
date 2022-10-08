import React from 'react';
import { useRef } from "react";
import Logo from '../components/Logo';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes, FaSignInAlt } from "react-icons/fa";


    const Header = () => {

    const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
   

    return (
      <>
    <nav className='navbar' ref={navRef}>
        <div className="container">
        <ul className='navbar__list ' >
            <Link className='navbar__logo' to='/Eventlisting'>
             <Logo />
            </Link>
            <li className='navbar__list__item'>
                <NavLink  to='/Dashboard'>
                    Dashboard
                </NavLink>
            </li>
            <li className='navbar__list__item'>
                <NavLink  exact  to='/Eventlisting'>
                    Events
                </NavLink>
            </li>
            <li className='navbar__list__item'>
                <NavLink   to='/Help'>
                    Help
                </NavLink>
            </li>
            <li className='navbar__list__item user_action'>
                <NavLink   to='/Logout'>
                    Logout
                </NavLink>
            </li>
                    
        </ul>
        </div>

        <div className="navbar__mobile">
        <div className="d-flex fixedtop w-100  ">
            <button className="nav-btn ps-4" onClick={showNavbar}>
            <FaBars className="deskTop_screen" /><FaTimes className="mob_screen"  />
		    </button>
            <div className="mobile-ogo"><Logo /></div>
            <button className="nav-btn pe-4" ><FaSignInAlt className="FaSignInAlt" /></button>
        </div>


        </div>
        
        
    </nav>
    </>
    )
};

export default Header;