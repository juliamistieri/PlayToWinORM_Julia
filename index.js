require("dotenv").config();
const conn = require("./db/conn");

const Usuario = require("../Models/Usuario")

conn
    .sync()
    .then(()=>{
    console.log("Conectado com sucesso!");
    })
    .catch((err)=>{
    console.log("Ocorreu um erro: " + err);
});