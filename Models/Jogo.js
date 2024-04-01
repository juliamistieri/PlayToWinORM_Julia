const db = require("../db/conn");
const { DataTypes } = require("sequelize");

const Jogo = db.define("Jogo", {
    nickname: {
        type: DataTypes.STRING,
        required: true,
    },
    nome: {
        type: DataTypes.STRING,
        required: true,
    },
});

module.exports = Jogo;