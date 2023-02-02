import React from "react";
import '../style/Login.css';
import Navbar from "./Navbar";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Login() {
    const [details2, setDetails2] = useState({login:"", email:"", password:""});
    const [error2, setError2] = useState("");

    const submitHandler2 = e => {
        e.preventDefault();
        if(details2.login === "" || details2.email === "" || details2.password === "") { setError2("Błąd"); return }
        axios.post('https://at.usermd.net/api/user/create', {
            name: details2.login,
            email: details2.email,
            password: details2.password,
        })
            .then((response) => {
            })
            .catch((error2) => {
                setError("Błąd");
                console.log(error2)
            });
    }


    const [details, setDetails] = useState({login:"", password:""});
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        if(details.login === "" || details.password === "") { setError("Błąd"); return }
        axios.post('https://at.usermd.net/api/user/auth', {
            login: details.login,
            password: details.password
        })
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                navigate("/");
                window.location.reload();
            })
            .catch((error) => {
                setError("Błąd");
                console.log(error)
            });
    }
    return(
    <div>
        <Navbar/>
        <main className="main__logscene">
            <div className="main__login">
                <form className="main__login__form" onSubmit={submitHandler}>
                    <h2 className="main__login__form-h">Zaloguj się</h2>
                    <label className="main__login__form-label">Login</label>
                    <input type="text" placeholder="Nazwa" className="main__login__form-space" onChange={e=>setDetails({...details, login: e.target.value})} value={details.login}/>
                    <label className="main__login__form-label">Hasło</label>
                    <input type="password" placeholder="Hasło" className="main__login__form-space" onChange={e=>setDetails({...details, password: e.target.value})} value={details.password}/>
                    {/*<button className="main__login__form-loginButton">Zaloguj</button>*/}
                    <input type="submit" value="Zaloguj" className="main__login__form-loginButton"/>
                </form>
            </div>
            <div className="main__pause"></div>
            <div className="main__register">
                <form className="main__register__form" onSubmit={submitHandler2}>
                    <h2 className="main__register__form-h">Zarejestruj</h2>
                    <label className="main__register__form-label">Login</label>
                    <input type="text" placeholder="Nazwa" className="main__register__form-space" onChange={e=>setDetails2({...details2, login: e.target.value})} value={details2.login}/>
                    <label className="main__register__form-label">E-mail</label>
                    <input type="email" placeholder="E-mail" className="main__register__form-space" onChange={e=>setDetails2({...details2, email: e.target.value})} value={details2.email}/>
                    <label className="main__register__form-label">Hasło</label>
                    <input type="password" placeholder="Hasło" className="main__register__form-space" onChange={e=>setDetails2({...details2, password: e.target.value})} value={details2.password}/>
                    {/*<button className="main__register__form-RegisterButton">Zarejestruj</button>*/}
                    <input type="submit" value="Zarejestruj" className="main__register__form-RegisterButton"/>
                </form>
            </div>

        </main>
    </div>
    )
}

export default Login;