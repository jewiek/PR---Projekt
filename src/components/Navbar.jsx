import React from "react";
import '../style/NavStyle.css';
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { isExpired, decodeToken  } from "react-jwt";

function Navbar({setD}) {
    const isNotLogged = isExpired(localStorage.getItem('token'))
    const name = isNotLogged ? "" : decodeToken(localStorage.getItem('token')).name;
    const userId = isNotLogged ? "" : decodeToken(localStorage.getItem('token')).userId;

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        axios.delete(`https://at.usermd.net/api/user/logout/${userId}`, {
            userId: userId
        })
            .then((response) => {
                navigate("/");
                window.location.reload();
            })
            .catch((error) => {
                console.log("Błąd");
            });
    }
    const funkcja=(value)=>{
        setD(value);
    }
    return(
        <header className="header">
            <nav className="header__nav">
                <div className="header__nav__title">
                    <Link to="/" className="header__nav__title-logo">
                        <img src="../icon/logox48.png"/>
                    </Link>
                    <Link className="header__nav__title-link">
                        Filmweb-clone
                    </Link>
                </div>
                <ul className="header__nav__list">
                    <Link to="/">
                        <li className="header__nav__item item-1">Filmy</li>
                    </Link>
                    <Link to="/Serial">
                        <li className="header__nav__item item-2">Seriale</li>
                    </Link>
                    <Link to="/Kategoria">
                        <li className="header__nav__item item-3">Kategorie</li>
                    </Link>
                </ul>
                <div className="header__nav__login">
                    <input type="text" onChange={e=>funkcja(e.target.value)} className="header__nav__login-search" placeholder="Czego szukasz?"/>
                    {(!isNotLogged) ?
                        <div className="header__nav__isLogged">
                            <a className="header__nav_isLogged-login">{name}</a>
                            <ul className="header__nav__isLoggedList">
                                <Link to="/Dodaj"><li className="header__nav__isLoggedList-item">Dodaj Film</li></Link>
                                <li className="header__nav__isLoggedList-item"><button className="header__nav__isLoggedList-button" onClick={logout}>Wyloguj</button></li>
                            </ul>
                        </div> : <Link to="/Login"><button type="button" className="header__nav__login-button">Login / Rejestracja</button></Link>
                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar;