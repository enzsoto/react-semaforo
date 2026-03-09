import React, { useEffect, useState } from "react";

const TrafficLigth = () => {

    const [ color, setColor ] = useState("");

    const ligth = "ligth";

    return (

        <div className="trafficLight-container">
            <div className={`red ${color === "red" ? "selected" : ""}`} onClick={() => setColor("red")}></div>
            <div className={`yellow ${color === "yellow" ? "selected" : ""}`} onClick={() => setColor("yellow")}></div>
            <div className={`green ${color === "green" ? "selected" : ""}`} onClick={() => setColor("green")}></div>
        </div>

    );

}


export default TrafficLigth;