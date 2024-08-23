const Collaborator = require("../models/Collaborator");

const CollaboratorController = {
  create: async (req, res) => {
    try {
      const { nome, cnpj, mercadoria } = req.body;
      const collaboratorCriado = await Collaborator.create({
        nome,
        cnpj,
        mercadoria,
      });

      return res.status(200).json({
        msg: "Colaborador registrado com sucesso!",
        collaborator: collaboratorCriado,
      });
    } catch (error) {
      console.error(error); 
      return res.status(500).json({
        msg: "Acione o suporte.(ana bea):",
      });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { nomeCollaborador, cnpj, mercadoria } = req.body;

      const collaboratorToUpdate = await Collaborator.findByPk(id);
      if (!collaboratorToUpdate) {
        return res.status(404).json({
          msg: "Colaborador não encontrado.",
        });
      }

      await collaboratorToUpdate.update({
        nomeCollaborador,
        cnpj,
        mercadoria,
      });

      return res.status(200).json({
        msg: "Colaborador atualizado com sucesso!",
      });
    } catch (error) {
      console.error(error); 
      return res.status(500).json({
        msg: "Acione o suporte.(ana bea):",
      });
    }
  },

  getAll: async (req, res) => {
    try {
      const collaborators = await Collaborator.findAll();
      return res.status(200).json({
        msg: "Listando colaboradores:",
        collaborators,
      });
    } catch (error) {
      console.error(error); 
      return res.status(500).json({
        msg: "Acione o suporte.(ana bea):",
      });
    }
  },

  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const collaboratorEncontrado = await Collaborator.findByPk(id);
      if (!collaboratorEncontrado) {
        return res.status(404).json({
          msg: "Colaborador não encontrado.",
        });
      }

      return res.status(200).json({
        msg: "Colaborador encontrado:",
        collaborator: collaboratorEncontrado,
      });
    } catch (error) {
      console.error(error); 
      return res.status(500).json({
        msg: "Acione o suporte.(ana bea):",
      });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const collaboratorFindend = await Collaborator.findByPk(id);

      if (!collaboratorFindend) {
        return res.status(404).json({
          msg: "Colaborador não encontrado.",
        });
      }

      await collaboratorFindend.destroy();
      return res.status(200).json({
        msg: "Colaborador desligado.",
      });
    } catch (error) {
      console.error(error); 
      return res.status(500).json({
        msg: "Acione o suporte.(ana bea):",
      });
    }
  },
};

module.exports = CollaboratorController;
