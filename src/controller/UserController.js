const { json } = require("express");
const User = require("../models/User");

const UserController = {
  create: async (req, res) => {
    try {
      //  const { id } = req.params; //Usuario//atualizar//12345678
      const { nome, senha, email } = req.body;

      //axios.post -> React
      const userCriado = await User.create({ nome, email, senha });
      await User.findAll();
      await User.findByPk(332);

      return res.status(200).json({
        msg: "Usuario criado com sucesso!",
        user: userCriado,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o suporte" });
    }

  },
  update: async (req, res) => {
    try {
      const { id } = req.params; //Usuario//atualizar//12345678
      const { nome,  senha, email } = req.body;
      //axios.post -> React
      console.log({ id });
      console.log({ nome,senha, email });

      const userUpdate = await User.findByPk();
      if(userUpdate == null){
        return res.status(404).json({
          msg: "User não encontradado"
        });
      }
      const udpdated = userUpdate.update({
        nome,senha,email
      })

      if(udpdated){
        return res.status(200).json({
          msg: "Usuario Atualizado!!"
        })
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o suporte" });
    }
  },
  getAll: async (req, res) => {
    try {
      const usuarios = await User.findAll();
      return res.status(200).json({
        msg: "Users encontrados!!",
        usuarios,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o suporte" });
    }
  },
getOne: async (req, res) => {
  
    try {
      return res.status(200).json({
        msg: "Usuario encontrado com sucesso",
        usuario: {},
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o suporte" });
    }
  },
  delete: async (req, res) => {
    try {
    const {id} = req.params
    const userFinded = await User.findByPk(id);
    if(userFinded==null){
      return res.status(404).json({
        msg: "user não encontradado"
      })
      userFinded.destroy();
    }
    } catch (error) {
      return res.status.json({
        msg: "Acione o SUPORTE"
      })
    }



      
  },
};
module.exports = UserController;
