import React, { useState } from 'react';
import logo from "../../assests/logo1.png";
import { Link } from 'react-router-dom';
import { nav } from '../../data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faSignOut, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Include faTimes here

import "../../components/Header/Styles/Header.css"; // Make sure you have defined styles for your header

export const Header = () => {
    const [navList, setNavList] = useState(false);

    return (
        <>
            <header>
                <div className='container flex'>
                    <div className='logo'>
                        <img src={logo} alt='logo'></img>
                    </div>
                    <div className='nav'>
                        <ul className={navList ? "small" : "flex"}> {/* Apply class based on navList state */}
                            {nav.map((list, index) => (
                                <li key={index}>
                                    <Link to={list.path}>{list.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='button flex'>
                        <h4>
                            <span>2</span> My list
                        </h4>
                        <button className='btn1'>
                            <FontAwesomeIcon icon={faSignOut} />
                            sign in
                        </button>
                    </div>
                    <div className='toggle'>
                        <button onClick={() => setNavList(!navList)}> {/* Toggle navList state */}
                            {navList ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};
