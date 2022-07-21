import React, {useState} from "react";
import './Body.css';

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
      console.log(values);
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
        <input type = "text" name = "name" placeholder = "Objeto" className="register--input" onChange={handleChangeValues}/>
        <input type = "text" name = "cost" placeholder = "Tipo" className="register--input" onChange={handleChangeValues}/>
        <input type = "text" name = "category" placeholder = "Categoria" className="register--input" onChange={handleChangeValues}/>
        <input type = "text" name = "artist" placeholder = "Artista" className="register--input" onChange={handleChangeValues}/>
        <input type = "text" name = "artist" placeholder = "Data de exposição" className="register--input" onChange={handleChangeValues}/>
        <input type = "text" name = "artist" placeholder = "Coleção" className="register--input" onChange={handleChangeValues}/>
        <button className='register--button' onClick={() => handleClickButton()}> Cadastrar Objeto</button>
      </div>
      </div>
    )
}