import React from "react"
import "./card.css"
export default function Card(props){
    return(
            <table border="1" cellpadding="5px" cellspacing="0" id="tabela">
                <tr>
                    <th className="celula">Nome do Artista</th>
                    <th className="celula">Ano de criação</th>
                    <th className="celula">Periodo</th>
                    <th className="celula">Nome da Obra</th>
                    <th className="celula">Pais</th>
                    <th className="celula">Descrição</th>
                </tr>
                <tr>
                    <td className="celula">{props.artista}</td>
                    <td className="celula">{props.ano}</td>
                    <td className="celula">{props.periodo}</td>
                    <td className="celula">{props.titulo}</td>
                    <td className="celula">{props.pais}</td>
                    <td className="celula">{props.descricao}</td>
                </tr>
            </table>
       
    )
}