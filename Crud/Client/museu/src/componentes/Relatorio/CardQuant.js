import React from "react"
import "../card.css";
export default function CardQuant(props){

    return(
        <>
        <table border="1" cellpadding="5px" cellspacing="0" id="tabela">
                <tr>
                    <th className="celula">ID do Objeto</th>
                    <th className="celula">Coleção</th>
                    <th className="celula">Mês</th>
                    <th className="celula">Ano</th>
                </tr>
                <tr>
                    <td className="celula">{props.num_ID}</td>
                    <td className="celula">{props.id_Colecao}</td>
                    <td className="celula">{props.mes}</td>
                    <td className="celula">{props.ano}</td>
                </tr>
            </table>
        </>
    )
}