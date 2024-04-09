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

    client.query(
        `INSERT INTO usuarios (usuario_nickname, usuario_nome)
        values ('${nick}', '${nome}') returning *`,
        (err, result) => {
            //callback
        }
    ) 
    });

    const usuario = await Usuario.create(dadosUsuario);

    res.send("Usuário inserido sob o id: " + usuario.id);

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
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
});

client
    .connect()
    .then(() => {
        console.log("Conectado ao Banco de Dados PostGreSQL");
        //exibeUsuariosCadastrados
    })
    .catch((err) => {
        console.log('Erro: ${err}');
    });

    function exibeUsuariosCadastrados() {
        cliente.query("select * from usuarios", (err, result) => {
            if (err) {
                console.error("Erro ao executar a busca: " + err);
            }
            else {
                console.log("Resultado: " + JSON.stringify(result.rows));
            }
            fechaConexao();
        });
    }

    function fechaConexao() {
        client 
        .end()
        .then(() => {
            console.log("Conexão encerrada!");
        })
        .catch((err) => {
            console.error("Erro ao encerrar conexão: ", err);
        });
    }