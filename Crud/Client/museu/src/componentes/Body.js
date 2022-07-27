import React, {useEffect, useState} from "react";
import './Body.css';
import Axios from 'axios';
import Card from "./Card";

export default function Body(){
    const [values, setValues] = useState();
    const [listCard, setListCard] = useState();
    console.log(listCard);

    useEffect(() => {
      Axios.get("http://localhost:3001/getcardsObjetos").then((response) => {
        setListCard(response.data);
        console.log(response);
      });
    }, []);


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

      {typeof listCard !== "undefined" && listCard.map((val) => (
        <Card
          listCard={listCard}
          setListCard={setListCard}
          artista = {val.ARTISTA} 
          ano = {val.Ano}
          descricao = {val.Descricao}
          pais = {val.Pais}
          periodo = {val.Periodo}
          titulo = {val.Titulo}
          num_ID={val.num_ID}
          
        ></Card>
      )
      )}
      
      </div>
    );
}