require("dotenv").config();
const conn = require("./db/conn");

const Usuario = require("../Models/Usuario")
const Jogo = require("../Models/Jogo")

const express = require("express");
const app = express();

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

app.get("/Usuario/novo", (req, res) => {
    res.sendFile('${__dirname}/views/formUsuario.html');
} );

app.post("/usuarios/novo", (req, res) => {
    const nickname = req.body.nickname;
    const nome = req.body.nome;

    const dadosUsuario = {
        nickname,
        nome,
    };

    const usuario = Usuario.create(dadosUsuario);

    res.send("Usuário inserido sob o id: " + usuario.id);
});

app.listen(8000, () => {
    console.log("Server executando na porta 8000!");
})

conn
    .sync()
    .then(()=>{
    console.log("Conectado com sucesso!");
    })
    .catch((err)=>{
    console.log("Ocorreu um erro: " + err);
});