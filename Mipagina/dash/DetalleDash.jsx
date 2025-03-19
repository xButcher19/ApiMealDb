import React from "react";
import { useParams } from "react-router-dom";

export default function DetalleDash() {


    let { city } = useParams();

    return (
        <div>   
            <h1>Detalle Dash</h1>
            <br />
            <h1> Datos obtenidos GET:{city}</h1>

        </div>

    );
}