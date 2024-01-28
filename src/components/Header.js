import React from "react";
import { Link, Route, Routes } from 'react-router-dom';
import heroBanner from '../images/restauranfood.jpg';
import Reservations from './Reservations';


function Header() {
    return (
        <>
            <header className="header">
                <section>
                    <div className="hero-banner">
                        <h2>Little Lemon</h2>
                        <h3>Chicago</h3>
                        <p>We are a family owned Mediterranean Restaurant, focused on traditional recipes served with a modern twist</p>
                        <Link to="/reservations"><button aria-label='On click'>Reserve a Table</button></Link>
                    </div>

                    <Routes>
                        <Route path='/reservations' element={<Reservations />} />
                    </Routes>
                    <div className="hero-banner-img">
                        <img src={heroBanner} alt=""></img>
                    </div>
                </section>

            </header>
        </>
    )
}

export default Header;
