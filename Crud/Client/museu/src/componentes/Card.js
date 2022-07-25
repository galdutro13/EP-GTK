import React, {useState, useEffect } from "react"
import Axios from "axios";
import "./card.css"

export default function Card(props){

    return(
        <div className="cardContainer">
            <h1 className="cardTitle">Objetos</h1>
            <p className="cardArtista">{props.artista}</p>
            <p className="cardAno">{props.ano}</p>
            <p className="cardPeriodo">{props.periodo}</p>
            <p className="cardTitulo">{props.titulo}</p>
            <p className="cardPais">{props.pais}</p>
            <p className="cardDescricao">{props.descricao}</p>
        </div>
        
    )
}