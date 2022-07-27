import React, {useState, useEffect } from "react"
import Axios from 'axios';
import CardArtista from "./CardArtista";

export default function Artista(props){
    const [values, setValues] = useState();
    const [listCard, setListCard] = useState();
    console.log(listCard);

    const handleChangeValues = (value) =>{
      setValues(prevValue=>({
        ...prevValue, 
        [value.target.name]: value.target.value, 
      }));
    };
  
    const handleClickButton = () =>{
      Axios.post("http://localhost:3001/Artista", {
      name: values.name,
      dataNasc: values.dataNasc,
      dataMorte: values.dataMorte,
      paisOrigem: values.paisOrigem,
      descricao: values.descricao,
      periodo: values.periodo,
      estilo: values.estilo,
      }).then((response)=>{
        console.log(response);
      });
    };

    
    console.log(listCard);
    useEffect(() => {
      Axios.get("http://localhost:3001/getcardsArtista").then((response) => {
        setListCard(response.data);
      });
    }, []);
    return(
        <>
        <div className="app--container">
        <div className='register--container'>
        <h1 className='register--title'>
          Museu Nustagem
        </h1>
        <h4>
          Cadastro de Artista
        </h4>
        <label>Nome do Artista</label>
        <input type = "text" name = "name" placeholder = "Nome do Artista" className="register--input" onChange={handleChangeValues}/>
        <label>Data de Nascimento</label>
        <input type = "date" name = "dataNasc" placeholder = "Data de Nascimento" className="register--input" onChange={handleChangeValues}/>
        <label>Data da Morte</label>
        <input type = "date" name = "dataMorte" placeholder = "Data da Morte" className="register--input" onChange={handleChangeValues}/>
        <label>Pais de origem</label>
        <input type = "text" name = "paisOrigem" placeholder = "Pais de Origem" className="register--input" onChange={handleChangeValues}/>
        <label>Descrição</label>
        <input type = "text" name = "descricao" placeholder = "Descrição" className="register--input" onChange={handleChangeValues}/>
        <label>Periodo</label>
        <input type = "text" name = "periodo" placeholder = "Periodo" className="register--input" onChange={handleChangeValues}/>
        <label>Estilo Principal</label>
        <input type = "text" name = "estilo" placeholder = "Estilo Principal" className="register--input" onChange={handleChangeValues}/>

        <button className='register--button' onClick={() => handleClickButton()}> Cadastrar Artista</button>
        
      </div>
      {typeof listCard !== "undefined" && listCard.map((value) =>{
        return <CardArtista
        listCard={listCard} 
        setListGames={setListCard}
        Descricao = {value.Descricao}
        EstiloPrincipal = {value.EstiloPrincipal}
        NOME_ARTISTA = {value.NOME_ARTISTA}
        PaisOrigem = {value.PaisOrigem} 
        Periodo = {value.Periodo}
        dataNasc = {value.dataNasc}
        dataMorte = {value.dataMorte}
        />
      })};
      </div> 
        </>
    )
}