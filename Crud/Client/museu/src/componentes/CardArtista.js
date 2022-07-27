import React from "react"
import "./card.css"
export default function Card(props){
    return(
            <table border="1">
                <tr>
                    <td><b>Nome do Artista</b></td>
                    <td><b>Data de Nascimento</b></td>
                    <td><b>Data da Morte</b></td>
                    <td><b>Pais de origem</b></td>
                    <td><b>Descrição</b></td>
                    <td><b>Periodo</b></td>
                    <td><b>Estilo Principal</b></td>
                </tr>
                <tr>
                    <td>{props.NOME_ARTISTA}</td>
                    <td>{props.dataNasc}</td>
                    <td>{props.dataMorte}</td>
                    <td>{props.PaisOrigem}</td>
                    <td>{props.Descricao}</td>
                    <td>{props.Periodo}</td>
                    <td>{props.EstiloPrincipal}</td>
                </tr>

            </table>
        
    )
}