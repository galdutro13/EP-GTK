import React from "react"
//import './App.css';
import Body from "./componentes/Body"; 
import Footer from "./componentes/Footer";
import Navbar from "./componentes/Navbar";
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
          component = <Navbar/>
          break
  }
  
  
  return(
    <>
      <Navbar/>
      {component}
      <Footer />
    </>
    
  )
}
  
export default App;
