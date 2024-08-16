const { json } = require("express");
const Product = require("../models/Products");

const ProductController = {
  //Criar Produto
  create: async (req, res) => {
    try {
      const { nome, qtd, preco } = req.body;
      const productCriado = await Product.create({ nome, preco, qtd });

      return res.status(200).json({
        msg: "Produto Registrado com sucesso!!",
        product: productCriado,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Acione o suporte",
      });
    }
  },
  //Update
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, preco, qtd } = req.body;

      const productUpdate = await Product.findByPk(id);
      if (productUpdate == null) {
        return res.status(404).json({
          msg: "Produto não econtrado",
        });
      }

      const udpdated = productUpdate.update({
        nome,
        preco,
        qtd,
      });
      if (udpdated) {
        return res.status(200).json({
          msg: "Produto Atualizado com sucesso!!",
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        msg: "Acione o suporte Ana Bea hehe",
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const products = await Product.findAll();
      return res.status(200).json({
        msg: "Produtos encontrados!!",
        products,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Acione o suporte" });
    }
  },

  getOne: async (req, res) => {
    const { id } = req.params;
    const produtoEncontrado = await Product.findByPk(id);
    if (produtoEncontrado == null) {
      return res.status(404).json({
        msg: "Produto nao encontrado!",
      });
    }

    res.status(200).json({
      msg: "Produto encontrado!",
      product: produtoEncontrado,
    });
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const productFinded = await Product.findByPk(id);

      if (productFinded == null) {
        return res.status(404).json({
          msg: "produto não encontradado",
        });
      }
      await productFinded.destroy();
      return res.status(200).json({
        msg: "Deletado!!",
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Acione o Suporte",
      });
    }
  },
};
module.exports = ProductController;
