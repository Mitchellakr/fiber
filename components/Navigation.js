import { useRef } from 'react';
import '../index.css'

export default function Navigation() {

    const navRef = useRef();
    const btnRef = useRef();
    const menuRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("menuOpen");
        btnRef.current.classList.toggle("menuOpen");
        menuRef.current.classList.toggle('active');
    }

    return (
        <div className="nav flex">
            <nav className="flex">
                <ul className="nav-links " ref={navRef}>
                    <li><a href="#">Community</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Features</a></li>
                </ul>
                <div className="header-btn" ref={btnRef}>
                    <a href="#" className='bold signin'>Sign In</a>
                    <a href="#" className="primary-btn">Sign Up</a>
                </div>
            </nav>
            <div className="menu" ref={menuRef} onClick={showNavBar}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}