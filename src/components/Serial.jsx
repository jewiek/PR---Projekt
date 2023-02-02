import React from "react";
import '../style/Serial.css';
import Navbar from "./Navbar";

function Serial() {
    return(
        <div>
            <Navbar/>
            <main className="main__Serialscene">
                <div className="main__Serial">
                    <h1 className="main__Serial__title">W trakcie przygotowania...</h1>
                </div>
            </main>
        </div>
    )
}

export default Serial;