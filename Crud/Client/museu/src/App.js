import React, {useState} from "react"
import './App.css';
import Header from "./componentes/Header";
import Body from "./componentes/Body"; 
import Footer from "./componentes/Footer";
import Objetos from "./componentes/Objetos";
import Gastos from "./componentes/Gastos";
import Quantidade from "./componentes/Quantidade";


function App() {

  return(
    <>
      <Header/>
      <Body />

      <Footer />
    </>
  )
}
  
export default App;
