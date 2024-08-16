const { Sequelize } = require("sequelize");
//Acesso ao banco de dados, estabelencendo conexão com o usuario root, da sennha root 

const sequelize = new Sequelize('lojinhalibbs', 'root', 'root', {
    host:'localhost',
    dialect:'mysql'
})

module.exports = sequelize;