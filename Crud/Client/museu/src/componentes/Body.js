import React, {useState, useEffect} from "react";
import './Body.css';
import Axios, * as others from 'axios';
import Card from "./Card";

export default function Body(){
    const [values, setValues] = useState();
    console.log(values);
    const handleChangeValues = (value) =>{
      setValues(prevValue=>({
        ...prevValue, 
        [value.target.name]: value.target.value, 
      }));
    };
  
    const handleClickButton = () =>{
      Axios.post("http://localhost:3001/register", {
      artista: values.artista,
      ano: values.ano,
      periodo: values.periodo,
      titulo: values.titulo,
      pais: values.pais,
      descricao: values.descricao,
      }).then((response)=>{
        console.log(response);
      });
    };

    const [listGames, setListGames] = useState();
    console.log(listGames);
    
    useEffect(() => {
      Axios.get("http://localhost:3001/getCard").then((response) => {
        setListGames(response.data);
      });
    }, []);

    
    return(
      
        <div className="app--container">
        <div className='register--container'>
        <h1 className='register--title'>
          Museu Nustagem
        </h1>
        <h4>
          Cadastro de objeto
        </h4>
        <label>Nome do Artista</label>
        <input type = "text" name = "artista" placeholder = "Artista" className="register--input" onChange={handleChangeValues}/>
        <label>Ano</label>
        <input type = "date" name = "ano" placeholder = "Ano" className="register--input" onChange={handleChangeValues}/>
        <label>Período</label>
        <input type = "text" name = "periodo" placeholder = "Período" className="register--input" onChange={handleChangeValues}/>
        <label>Titulo</label>
        <input type = "text" name = "titulo" placeholder = "Titulo" className="register--input" onChange={handleChangeValues}/>
        <label>Pais</label>
        <input type = "text" name = "pais" placeholder = "País" className="register--input" onChange={handleChangeValues}/>
        <label>Descrição</label>
        <input type = "text" name = "descricao" placeholder = "Descrição" className="register--input" onChange={handleChangeValues}/>

        <button className='register--button' onClick={() => handleClickButton()}> Cadastrar Objeto</button>
      </div>
      {typeof listGames !== "undefined" && listGames.map((value) =>{
        return(
        <Card key={value.id}
        listCard={listGames} 
        setListGames={setListGames}
        id={value.id}    
        artista = {value.artista} 
        ano = {value.ano}
        periodo = {value.periodo}
        titulo = {value.titulo}
        pais = {value.pais}
        descricao = {value.descricao}>
    
        </Card>
        )
      })};
      </div>
      
    )
}