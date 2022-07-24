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
      name: values.name,
      cost: values.cost,
      category: values.category,
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
        <div className="app--container">
        <div className='register--container'>
        <h1 className='register--title'>
          Museu Nustagem
        </h1>
        <h4>
          Cadastro de objeto
        </h4>
        <input type = "text" name = "name" placeholder = "Objeto" className="register--input" onChange={handleChangeValues}/>
        <input type = "text" name = "cost" placeholder = "Tipo" className="register--input" onChange={handleChangeValues}/>
        <input type = "text" name = "category" placeholder = "Categoria" className="register--input" onChange={handleChangeValues}/>
        <button className='register--button' onClick={() => handleClickButton()}> Cadastrar Objeto</button>
      </div>
      {typeof listGames !== "undefined" && listGames.map((value) =>{
        return <Card key={value.id}
        listCard={listGames} 
        setListGames={setListGames}>
        id={value.id}
        nome = {value.name}       
        cost = {value.cost} 
        category = {value.category}
        </Card>
      })};
      </div>
      
    )
}