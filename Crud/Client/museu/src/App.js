import React, {useState} from "react"
import './App.css';
import Header from "./componentes/Header";
 
function App() {
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

  return (
    <div className="app--container">
      <div className='register--container'>
      <h1 className='register--title'>
        Museu Nustagem
      </h1>
      <input type = "text" name = "name" placeholder = "Nome" className="register--input" onChange={handleChangeValues}/>
      <input type = "text" name = "cost" placeholder = "Preço" className="register--input" onChange={handleChangeValues}/>
      <input type = "text" name = "category" placeholder = "Categoria" className="register--input" onChange={handleChangeValues}/>
      <button className='register--button' onClick={() => handleClickButton()}> Cadastrar Objeto</button>
    </div>
    </div>
  );
  return(
    <>
      <Header/>
    </>
  )
}
  
export default App;
