import React, {useEffect, useState} from "react";
import CardObjeto from "./CardObjeto";
import Axios from 'axios';

export default function Objetos(){
    const [listCard, setListCard] = useState();
    console.log(listCard);

    console.log(listCard);
    useEffect(() => {
      Axios.get("http://localhost:3001/getCATEGORIATIPO").then((response) => {
        setListCard(response.data);
      });
    }, []);
    return(

        <>
        {typeof listCard !== "undefined" && listCard.map((value) =>{
        return <CardObjeto
        listCard={listCard} 
        setListGames={setListCard}
        artista = {value.ARTISTA}
        ano = {value.Ano}
        descricao = {value.Descricao}
        pais = {value.pais}
        Periodo = {value.Periodo}
        Titulo = {value.Titulo}
        emprestado = {value.isEmprestado}
        escultura = {value.isEscultura}
        outros = {value.isOutro}
        permanente = {value.isPermanente}
        pintura = {value.isPintura}
        num_ID = {value.num_ID}
        />
      })};
        </>
    )
}