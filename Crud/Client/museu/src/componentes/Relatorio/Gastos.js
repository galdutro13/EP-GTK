import React, {useEffect, useState} from "react";
import Axios from 'axios';
import CardGastos
 from "./CardGastos";
export default function Gastos(){
    const [listCard, setListCard] = useState();
    console.log(listCard);

    console.log(listCard);
    useEffect(() => {
      Axios.get("http://localhost:3001/getGastos").then((response) => {
        setListCard(response.data);
      });
    }, []);
    return(
        <>
         {typeof listCard !== "undefined" && listCard.map((value) =>{
        return <CardGastos
        listCard={listCard} 
        setListGames={setListCard}
        num_ID = {value.num_ID}
        mes = {value.mes}
        ano = {value.ano}
        />
      })};
        </>
    )
}