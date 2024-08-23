const { Router } = require("express");
const userRoutes = require("../router/routerUser");
const { validateProduct, validateProductId } = require("../middleware/ValidateProduct");
const { validateUser } = require("../middleware/ValidetUser");

const router = Router();

// Usar as rotas de usuário
router.use("/user", validateUser);

router.use("/product",validateProduct)

// Configurar as Rotas de Produto (CRUD)
module.exports = router;