import React from 'react';
import '../index.css'
// import { useEffect } from 'react';
// import ReactDOM from 'react-dom/client';

export default function Header() {
    const headerBtn = document.querySelector(".header-btn");
    const navLink = document.querySelector("  .nav-links");
    function animateNavbar(e) {
        e.currentTarget.classList.toggle('active');
        // headerBtn.classList.toggle(".menu-open");
        navLink.classList.toggle(".menu-open");
    }


    return (
        <header>
            <div className="container">
                <div className="header">
                    <p className='logo'>fiber</p>
                    <ul className="nav-links">
                        <li><a href="#">Community</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Features</a></li>
                    </ul>
                    <div className="header-btn">
                        <a href="#" className='bold signin'>Sign In</a>
                        <a href="#" className="primary-btn">Sign Up</a>
                    </div>
                    <div className="menu" onClick={animateNavbar}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </header>
    );
}