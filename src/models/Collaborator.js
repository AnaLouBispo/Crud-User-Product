const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const Collaborator = sequelize.define("collaborator", {
    nome: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    cnpj: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mercadoria: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Collaborator;
