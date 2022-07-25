import React from "react"

export default function navbar(){
    return(
        <navbar className="nav">
        <a href="/" className="siteTitle">
            Nustagem
        </a>
        <ul>
            <li><a href="/Body">Cadastros</a>
                <ul>
                    <li><a href="/Body">Objeto</a></li>
                    <li><a href="/Artista">Artista</a></li>
                    <li><a href="#">Coleção</a></li>
                </ul>
            </li>
            <li>
                <a href="/Relatórios">Relatórios</a>
            </li>
        </ul>
    </navbar>
    ) 
    
}