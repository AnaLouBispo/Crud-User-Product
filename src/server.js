const express = require('express');
const router = require('./router/router');
const sequelize = require('./config/config');
const User = require("./models/User");
const app = express();

//modelo da Api Json
app.use(express.json());
app.use('/api', router)

sequelize.authenticate()
.then(async()=>{
   console.log('conexão estabelecida com sucesso :D');
   await sequelize .sync();
   
})
.then(() =>{
    app.listen(8080, ()=>{
        console.log('----------------------------');
        console.log('Estamos no Ar hehe');
        console.log('----------------------------');
        
    });
    
})
.catch((error)=>{
    console.error("Error ao se conectar com o banco:", error);
    
});




//Rota de teste -> 'HealthCheck'
app.get('/HealthCheck', (req,res)=>{
    return res.status(200).json({
        msg: "Estamos vivos!",
        alive: true
    });
});