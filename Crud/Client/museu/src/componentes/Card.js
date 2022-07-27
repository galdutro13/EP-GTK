import React from "react"
import "./card.css"
export default function Card(props){
    return(
        <div className="Centralizador">
            <h1 className="cardTitle">Objetos</h1>
            <p className="cardArtista">Artista: {props.artista}</p>        
            <p className="cardAno">Ano de criação: {props.ano}</p>
            <p className="cardPeriodo">Periodo:{props.periodo}</p>
            <p className="cardTitulo">Nome da Obra: {props.titulo}</p>
            <p className="cardPais">Pais:{props.pais}</p>
            <p className="cardDescricao">Descrição: {props.descricao}</p>
        </div>
       
    )
}