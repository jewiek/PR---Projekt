import React, {useEffect, useState} from "react";
import '../style/Details.css';
import Navbar from "./Navbar";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import {decodeToken, isExpired} from "react-jwt";

function Details() {
    const {id} = useParams();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(false);


    const isNotLogged = isExpired(localStorage.getItem('token'))
    const isAdmin = isNotLogged ? false : decodeToken(localStorage.getItem('token')).isAdmin;

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://at.usermd.net/api/movies/${id}`)
            .then((response) => {
                setMovie(response.data);
                setLoading(true);
            })
            .catch((error) =>{
                console.log(error)
            })
    }, []);

    const deleteVideo = () => {
        axios.delete(`https://at.usermd.net/api/movie/${id}`)
            .then((response) => {
                navigate("/");
                console.log(response);
            })
            .catch((error) =>{
                console.log(error);
            })
    }

    return (
    <div>
        <Navbar/>
        <div className="details__main">
        <img className='MovieImage__details' src={movie.image}/>
        <div><p className='MovieTitle__details'>{movie.title}</p></div>
        <div><p className="MovieContent__details">{movie.content}</p></div>
        {isAdmin ? <div><button className="DeleteButton" onClick={deleteVideo}>DELETE</button></div> : null}
        </div>
    </div>
    )
}

export default Details;