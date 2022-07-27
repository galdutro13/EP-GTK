import React from "react"
import "../card.css";
export default function CardObjeto(props){
    let tipo;
    let classe;
    if(props.emprestado === 1){
        classe = "Emprestado"
    }else{
        classe = "Permanente"
    }

    if(props.pintura === 1){
        tipo = "Pintura"
    }
    if(props.outros === 1){
        tipo = "Outros"
    }
    if(props.escultura === 1){
        tipo = "Escultura"
    }
    return(
        <>
         <table border="1" cellpadding="5px" cellspacing="0" id="tabela">
                <tr>
                    <th className="celula">ID do Objeto</th>
                    <th className="celula">Titulo da Obra</th>
                    <th className="celula">Tipo de Obra</th>
                    <th className="celula">Categoria da obra</th>
                </tr>
                <tr>
                    <td className="celula">{props.num_ID}</td>
                    <td className="celula">{props.Titulo}</td>
                    <td className="celula">{tipo}</td>
                    <td className="celula">{classe}</td>
                </tr>
            </table>
        </>
    )
}