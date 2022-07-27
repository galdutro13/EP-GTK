import React from "react"
//import './App.css';
import Body from "./componentes/Body"; 
import Footer from "./componentes/Footer";
import Navbar from "./componentes/Navbar";
import Artista from "./componentes/Artista";
import Objetos from "./componentes/Relatorio/Objetos";
import Gastos from "./componentes/Relatorio/Gastos";
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
        case "/Objetos":
          component = <Objetos/>
          break
          case "/Gastos":
            component = <Gastos/>
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
