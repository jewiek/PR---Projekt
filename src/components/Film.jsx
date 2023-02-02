import React, {useEffect, useState} from "react";
import '../style/Film.css';
import Navbar from "./Navbar";
import axios from "axios";
import {Link} from "react-router-dom";

function Film({data2}) {
    const [data, setData] = useState([]);
    const [movies, setMovies] = useState([]);
    const [finishLoading, setFinishLoading] = useState(false);

    useEffect(() => {
        axios.get("https://at.usermd.net/api/movies")
            .then((response) => {
                setData(response.data);
                setFinishLoading(true);
                setMovies(response.data)
            })
            .catch((error) =>{
                console.log(error);
            })
    }, []);
    useEffect(()=>{
        setNewMovies(data2);
    },[data2])
    const setNewMovies = (value="") => {
        let serchedMovies = [];
        data.forEach((movie) => {
            if(movie.title) {
                if(movie.title.toLowerCase().includes(value.toLowerCase())) serchedMovies.push(movie);
            }
        })
        setMovies(serchedMovies);
    };
    return(
        <div>
            <main className="main__filmscene">
                {movies.map((movie, i) => { return (
                    <div key={i} className="main__film">
                        <Link to={`/details/${movie.id}`} className="nav-link" >
                            <div className='MovieAligner'>
                                <img className='MovieImage' src={movie.image}/>
                                <p className='MovieTitle'>{movie.title}</p>
                            </div>
                        </Link>
                    </div>
                )})}
            </main>
        </div>
    )
}

export default Film;