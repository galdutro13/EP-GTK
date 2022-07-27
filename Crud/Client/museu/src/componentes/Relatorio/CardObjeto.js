import React from "react"
import "../card.css";
export default function CardObjeto(props){

    return(
        <>
         <table border="1" cellpadding="5px" cellspacing="0" id="tabela">
                <tr>
                    <th className="celula">ID do Objeto</th>
                    <th className="celula">Titulo da Obra</th>
                    <th className="celula">Tipo da obra</th>
                    <th className="celula">Coleção</th>
                </tr>
                <tr>
                    <td className="celula">{props.num_ID}</td>
                    <td className="celula">{props.titulo}</td>
                    <td className="celula">{props.tipo}</td>
                    <td className="celula">{props.colecao}</td>
                </tr>
            </table>
        </>
    )
}