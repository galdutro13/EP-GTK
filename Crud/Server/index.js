const express = require("express");
const app = express();
const mysql = require("mysql2");
//Iniciando servidor

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "crudgames",
})


app.get('/', (req, res) =>{
    let SQL = "INSERT INTO games ( name, cost, category) VALUES ( 'teste', '120', 'ação')"
    db.query(SQL, (err, result)=>{
        console.log(err);
        console.log("Connected!");
    });

});


app.listen(3001, ()=>{
    console.log("rodando servidor");
});