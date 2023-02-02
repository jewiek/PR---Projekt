import React, {useEffect, useState} from "react";
import '../style/Dodaj.css';
import Navbar from "./Navbar";
import {useNavigate} from "react-router-dom";
import axios from "axios";


function Dodaj() {
    const [details, setDetails] = useState({title:"", image:"", content:""});
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        if(details.title === "" || details.image === "" || details.content === "") { setError("Błąd"); return }
        axios.post("https://at.usermd.net/api/movies", {
            title: details.title,
            image: details.image,
            content: details.content,
        })
            .then((response) => {
                navigate("/");
                console.log(response);
            })
            .catch((error) => {
                setError("Błąd");
                console.log(error);
            });
    }
    return (
            <div>
                <Navbar/>
                <div className="main__add">
                    <form className="main__add__form" onSubmit={submitHandler}>
                        <h2 className="main__add__form-h">Dodaj Film</h2>
                        <label className="main__add__form-label">Tytuł</label>
                        <input type="text" placeholder="Tytuł" className="main__add__form-space" id="title" name="title" onChange={e=>setDetails({...details, title: e.target.value})} value={details.title}/>
                        <label className="main__add__form-label">Obraz</label>
                        <input type="text" placeholder="Obraz" id="image" name="image" className="main__add__form-space" onChange={e=>setDetails({...details, image: e.target.value})} value={details.image}/>
                        <label className="main__add__form-label">Opis</label>
                        <input type="text" placeholder="Opis" id="content" name="content" className="main__add__form-space" onChange={e=>setDetails({...details, content: e.target.value})} value={details.content}/>
                        <input type="submit" value="Dodaj" className="main__add__form-addButton"/>
                    </form>
                </div>
            </div>
    )
}

export default Dodaj;