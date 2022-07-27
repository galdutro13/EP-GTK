import React from "react"

export default function Navbar(){
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
                    <li><a href="/Footer">Coleção</a></li>
                </ul>
            </li>
            <li>
                <a href="/Relatórios">Relatórios</a>
                <ul>
                    <li><a href="/Objetos">Objeto</a></li>
                    <li><a href="/Gastos">Gastos</a></li>
                    <li><a href="/Quantidade">Quantidades</a></li>
                </ul>
            </li>
        </ul>
    </navbar>
    ) 
    
}