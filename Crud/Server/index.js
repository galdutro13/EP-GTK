const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "crudMuseu",
});


app.get("/", (req, res) =>{
    console.log("teste");
    let SQL =
     "INSERT INTO objetos ( name, cost, category ) VALUES ( 'Teste', '80', 'teste' )";

    db.query(SQL, (err, result) =>{
        console.log(err);
        
    });
});
//tudo que entra no server é req e tudo que sai res

//app.post
//app.delete
//app.put

app.listen(3001, () =>{
    console.log("rodando servidor");
});