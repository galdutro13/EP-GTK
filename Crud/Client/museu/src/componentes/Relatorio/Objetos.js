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
        emprestimo = {value.Data_Emprestimo}
        colecao = {value.NOME_COLECAO}
        num_ID = {value.num_ID}
        titulo = {value.titulo}
        
        />
      })};
        </>
    )
}