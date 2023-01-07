import React from "react";
import '../style/Login.css';
import Navbar from "./Navbar";

function Login() {
    return(
    <div>
        <Navbar/>
        <main className="main__logscene">
            <div className="main__login">
                <form className="main__login__form">
                    <h2 className="main__login__form-h">Zaloguj się</h2>
                    <label className="main__login__form-label">Login</label>
                    <input type="text" placeholder="Nazwa" className="main__login__form-space"/>
                    <label className="main__login__form-label">Hasło</label>
                    <input type="password" placeholder="Hasło" className="main__login__form-space"/>
                    <button className="main__login__form-loginButton">Zaloguj</button>
                </form>
            </div>
            <div className="main__pause"></div>
            <div className="main__register">
                <form className="main__register__form">
                    <h2 className="main__register__form-h">Zarejestruj</h2>
                    <label className="main__register__form-label">Login</label>
                    <input type="text" placeholder="Nazwa" className="main__register__form-space"/>
                    <label className="main__register__form-label">E-mail</label>
                    <input type="email" placeholder="E-mail" className="main__register__form-space"/>
                    <label className="main__register__form-label">Hasło</label>
                    <input type="password" placeholder="Hasło" className="main__register__form-space"/>
                    <button className="main__register__form-RegisterButton">Zarejestruj</button>
                </form>
            </div>

        </main>
    </div>
    )
}

export default Login;