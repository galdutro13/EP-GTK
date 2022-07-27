import React from "react"
import "../card.css";
export default function CardObjeto(props){
    let tipo;
    if(props.Data_Emprestimo !== ""){
        tipo = "Emprestimo";
    }else{
        tipo = "Permanente";
    }
    return(
        <>
         <table border="1" cellpadding="5px" cellspacing="0" id="tabela">
                <tr>
                    <th className="celula">ID do Objeto</th>
                    <th className="celula">Titulo da Obra</th>
                    <th className="celula">Coleção da Obra</th>
                    <th className="celula">Tipo de obra</th>
                </tr>
                <tr>
                    <td className="celula">{props.num_ID}</td>
                    <td className="celula">{props.titulo}</td>
                    <td className="celula">{props.colecao}</td>
                    <td className="celula">{tipo}</td>
                </tr>
            </table>
        </>
    )
}