import React, {useEffect, useState} from "react";
import './Main.css';
import axios from "axios";
import {Link} from "react-router-dom";

function Main() {
    const [data, setData] = useState([]);
    const [movies, setMovies] = useState([]);
    const [finishLoading, setFinishLoading] = useState(false);
    useEffect(() => {
        axios.get("https://at.usermd.net/api/movies")
            .then((response) => {
                setData(response.data);
                setFinishLoading(true);
            })
            .catch((error) =>{
                console.log(error);
            })
    }, []);
    return(
        <main className="main">
            <section className="main__top">
                <div className="main__top__text">
                    <h1 className="main__top__text-item">Najlepsze filmy<br/> i seriale</h1>
                </div>
                <div className="main__top__img">
                    Tu będą filmy i seriale
                </div>
            </section>
            <section className="main__middle">
                <div className="main__middle__text">
                    <h2 className="main__middle__text-item">Polecane filmy</h2>
                </div>
                <div className="main__middle__img">
                </div>
            </section>
            <section className="main__bottom">
                <div className="main__bottom__text">
                    <h2 className="main__bottom__text-item">Polecane seriale</h2>
                </div>
                <div className="main__bottom__img">
                    W trakcie przygotowania...
                </div>
            </section>
        </main>
    )
}

export default Main;
