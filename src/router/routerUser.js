const { Router } = require("express");
const UserController = require("../controller/UserController");
const { validateUser, validateUserId } = require("../middleware/ValidetUser");


const router = Router();
router.post("/", validateUser, (req, res) => {
    UserController.create(req, res);
  });
  
  router.get("/", (req, res) => {
    UserController.getAll(req, res);
  });
  // /api/user/:id --> (Params)
  // /api/user?id=id --> (Query)
  // {body: {id:123 } } --> (Body)
  router.delete("/user/:id", validateUser, (req, res) => {
    UserController.delete(req, res);
  });
  
  router.put("/user/:id", validateUser, validateUserId, (req, res) => {
    UserController.update(req, res);
  });
  
  router.get("/user/:id", validateUserId, (req, res) => {
    UserController.getOne(req, res);
  });
