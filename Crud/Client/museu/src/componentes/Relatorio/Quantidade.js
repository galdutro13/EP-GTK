import React, {useEffect, useState} from "react";
import CardQuant from "./CardQuant";
import Axios from 'axios';


export default function Quantidade(){
    const [listCard, setListCard] = useState();
    console.log(listCard);

    console.log(listCard);
    useEffect(() => {
      Axios.get("http://localhost:3001/getQuantidade").then((response) => {
        setListCard(response.data);
      });
    }, []);
    return(
        <>
        {typeof listCard !== "undefined" && listCard.map((value) =>{
        return <CardQuant
        listCard={listCard} 
        setListGames={setListCard}
        num_ID = {value.num_ID}
        colecao = {value.ID_Colecao}
        mes = {value.mes}
        ano = {value.ano}
        />
      })};
        </>
    )
}