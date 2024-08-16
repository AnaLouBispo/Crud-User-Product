// Desustruração, buscando uma função específica da biblioteca 

const { Router } = require("express");
const UserController = require("../controller/UserController");
const ProductController =  require("../controller/ProductController")
const router = Router();

//Configurar as Rotas(Crud)
router.post("/", (req, res) => {
  UserController.create(req, res);
});

router.get("/", (req, res) => {
  UserController.getAll(req, res);
});
// /api/user/:id --> (Params)
// /api/user?id=id --> (Query)
// {body: {id:123 } } --> (Body)
router.delete("/user/:id", (req, res) => {
  UserController.delete(req, res);
});

router.put("/user/:id", (req, res) => {
  UserController.update(req, res);
});

router.get("/user/:id", (req, res) => {
  UserController.getOne(req, res);
});



//Configurar as Rotas de Produto(Crud)
router.post("/produto", (req, res) => {
  ProductController.create(req, res);
});

router.get("/produto/", (req, res) => {
  ProductController.getAll(req, res);
});

router.delete("/produto/:id", (req, res) => {
  ProductController.delete(req, res);
});

router.put("/produto/:id", (req, res) => {
  ProductController.update(req, res);
});

router.get("/produto/:id", (req, res) => {
  ProductController.getOne(req, res);
});









module.exports = router;

