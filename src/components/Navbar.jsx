import React from "react";
import '../style/NavStyle.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <header className="header">
            <nav className="header__nav">
                <div className="header__nav__title">
                    <Link to="/" className="header__nav__title-logo">
                        <img src="../icon/logox48.png"/>
                    </Link>
                    <Link to="/" className="header__nav__title-link">
                        Filmweb-clone
                    </Link>
                </div>
                <ul className="header__nav__list">
                    <Link href="#">
                        <li className="header__nav__item item-1">Filmy</li>
                    </Link>
                    <Link href="#">
                        <li className="header__nav__item item-2">Seriale</li>
                    </Link>
                    <Link href="#">
                        <li className="header__nav__item item-3">Kategorie</li>
                    </Link>
                </ul>
                <div className="header__nav__login">
                    <input className="header__nav__login-search" placeholder="Czego szukasz?"/>
                        <Link to="/Login"><button type="button" className="header__nav__login-button">Login / Rejestracja</button></Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;