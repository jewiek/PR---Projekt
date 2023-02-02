import React, {useEffect, useState} from 'react'
import Navbar from "./components/Navbar";
import Film from "./components/Film";

function Home() {
    const [data2, setD] = useState("");
    return(
        <div>
            <Navbar setD={setD}/>
            <Film data2={data2}/>
        </div>
    )
}

export default Home;