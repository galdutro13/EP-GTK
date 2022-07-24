import React, {useState, useEffect } from "react"
import './App.css';
import Header from "./componentes/Header";
import Body from "./componentes/Body"; 
import Footer from "./componentes/Footer";
import Card from "./componentes/Card";

function App() {

  return(
    <>
      <Header/>
      <Body />
      <Card/>
      <Footer />
    </>
  )
}
  
export default App;
