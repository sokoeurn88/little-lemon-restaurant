import { useState } from 'react';
import logo from '../images/Logo.svg';

function Nav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    }
    return (
        <>
            <nav className={`navbar ${mobileMenuOpen ? 'open' : ''}`}>
                <a href='./' className='logo'>
                    <img src={logo} alt='logo' />
                </a>

                <div className='mobile-menu-icon' onClick={toggleMenu}>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                </div>
                <ul className={`nav-links ${mobileMenuOpen ? 'visible' : ''}`}>
                    <a href='/'>Home</a>
                    <a href='/'>About</a>
                    <a href='/'>Menu</a>
                    <a href='/'>Reservations</a>
                    <a href='/'>Order Online</a>
                    <a href='/'>Login</a>
                </ul>
            </nav>
        </>
    );
};

export default Nav;
