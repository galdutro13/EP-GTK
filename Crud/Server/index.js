const express = require("express");
const app = express();
const mysql = require("mysql2");
//Iniciando servidor
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "museu",
})

app.use(cors());
app.use(express.json());

app.post("/Artista", (req, res)=>{
    const {name} = req.body;
    const {dataNasc} = req.body;
    const {dataMorte} = req.body;
    const {paisOrigem} = req.body;
    const {descricao} = req.body;
    const {periodo} = req.body;
    const {estilo} = req.body;
    let SQL = "INSERT INTO Artista ( NOME_ARTISTA, dataNasc, dataMorte, PaisOrigem, Descricao, Periodo, EstiloPrincipal) VALUES (?,?,?,?,?,?,?)";
    db.query(SQL,[name, dataNasc, dataMorte, paisOrigem, descricao, periodo, estilo], (err, result) =>{
        console.log(err);
        console.log("Dados registrados");
    })
});

app.post("/register", (req, res)=>{
    const {artista} = req.body;
    const {ano} = req.body;
    const {periodo} = req.body;
    const {titulo} = req.body;
    const {pais} = req.body;
    const {descricao} = req.body;
    let SQL = "INSERT INTO objetos_arte ( ARTISTA, Ano, Periodo, Titulo, Pais, Descricao) VALUES (?,?,?,?,?,?)";
    db.query(SQL,[artista, ano, periodo, titulo, pais, descricao], (err, result) =>{
        console.log(err);
        console.log("Dados registrados");
    })
});


app.get("/getcardsObjetos", (req, res) =>{
    let SQL = "SELECT * FROM objetos_arte";
    db.query(SQL, (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result);
            
        }
    });
});

app.get("/getcardsArtista", (req, res) =>{
    let SQL = "SELECT * FROM Artista";
    db.query(SQL, (err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result);
        }
    });
});
app.listen(3001, ()=>{
    console.log("rodando servidor");
});