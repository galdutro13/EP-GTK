import React from "react"
import ReactEcharts from "echarts-for-react"; 

export default function CardGastos(props){
    return(
        <>
        <table border="1" cellpadding="5px" cellspacing="0" id="tabela">
                <tr>
                    <th className="celula">ID do Objeto</th>
                    <th className="celula">Gasto por mês</th>
                    <th className="celula">Gasto por ano</th>
                </tr>
                <tr>
                    <td className="celula">{props.num_ID}</td>
                    <td className="celula">{props.mes}</td>
                    <td className="celula">{props.ano}</td>
                </tr>
            </table>
        </>
    )
}