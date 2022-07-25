import React, {useState, useEffect } from "react"
//import './App.css';
import Header from "./componentes/Header";
import Body from "./componentes/Body"; 
import Footer from "./componentes/Footer";
import Card from "./componentes/Card";
import Navbar from "./componentes/navbar";
import Artista from "./componentes/Artista";

function App() {
  let component
  switch(window.location.pathname){
    case "/":
      component = <Footer/>
      break
      case "/Body":
        component = <Body/>
        break
        case "/Artista":
          component = <Artista/>
          break
        case "/Relatorios":
          component = <Header/>
          break
  }
  
  return(
    <>
      <Navbar/>
      {component}
      <Header/>
      <Footer />
    </>
    
  )
}
  
export default App;
