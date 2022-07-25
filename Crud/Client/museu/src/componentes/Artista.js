import React, {useState, useEffect } from "react"
import Axios, * as others from 'axios';
import Card from "./Card";

export default function Artista(){
    const [values, setValues] = useState();
    console.log(values);
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

    const [listGames, setListGames] = useState();
    console.log(listGames);
    useEffect(() => {
      Axios.get("http://localhost:3001/getCards").then((response) => {
        setListGames(response.data);
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
      <Card/>
      {typeof listGames !== "undefined" && listGames.map((value) =>{
        return <Card key={value.id}
        listCard={listGames} 
        setListGames={setListGames}>
        id={value.id}    
        name = {value.name} 
        dataNasc = {value.dataNasc}
        dataMorte = {value.dataMorte}
        paisOrigem = {value.paisOrigem}
        descricao = {value.descricao}
        periodo = {value.periodo}
        estilo = {value.estilo}
        </Card>
      })};
      </div>
      
        </>
    )
}