const { Router } = require("express");
const ProductController = require("../controller/ProductController");
const {
  validateProduct,
  validateProductId,
} = require("../middleware/ValidateProduct");
const router = Router();

router.post("/produtos", validateProduct, (req, res) => {
  ProductControlleroller.create(req, res);
});

router.get("/produtos", (req, res) => {
  ProductController.getAll(req, res);
});

router.delete("/produtos/:id", validateProductId, (req, res) => {
  ProductController.delete(req, res);
});

router.put("/produtos/:id", validateProduct, validateProductId, (req, res) => {
  ProductController.update(req, res);
});

router.get("/produtos/:id", validateProductId, (req, res) => {
  ProductController.getOne(req, res);
});
