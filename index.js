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

app.post("/usuarios/novo", async (req, res) => {
    const nickname = req.body.nickname;
    const nome = req.body.nome;

    const dadosUsuario = {
        nickname,
        nome,
    };

    const usuario = await Usuario.create(dadosUsuario);

    res.send("Usuário inserido sob o id: " + usuario.id);
});

app.get("/Jogo/novo", (req, res) => {
    res.sendFile('${__dirname}/views/formJogo.html');
} );

app.post("/jogos/novo", async (req, res) => {
    const nickname = req.body.nickname;
    const nome = req.body.nome;

    const dadosJogo = {
        nickname,
        nome,
    };

    const jogo = await Jogo.create(dadosJogo);

    res.send("Jogo inserido sob o id: " + jogo.id);
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

const { Client } = require("pg");

const client = new Client({
    user: "postgress",
    password: "Julia2002",
    host: "localhost",
    port: "5432",
    database: "nome_do_banco",
});

client
    .connect()
    .then(() => {
        console.log("Conectado ao Banco de Dados PostGreSQL");
    })
    .catch((err) => {
        console.log('Erro: ${err}');
    });

    