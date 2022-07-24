import React, {useState, useEffect } from "react"
import Axios from "axios";


export default function Card(props){

    return(
        <div className="cardContainer">
            <h1 className="cardTitle">{props.name}</h1>
            <p className="cardCost">{props.cost}</p>
            <p className="cardCategory">{props.category}</p>
            
        </div>
        
    )
}