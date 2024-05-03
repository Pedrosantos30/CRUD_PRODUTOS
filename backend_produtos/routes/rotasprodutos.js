const router = require("express").Router();

const produtosController = require("../controllers/produtosController");

router
.route("/rotasprodutos")
.post((req, res) => produtosController.create(req, res));

router.route("/rotasprodutos").get((req, res) => produtosController.getAll(req, res)),

router
.route("/rotasprodutos/:id")
.get((req, res) => produtosController.get(req, res));

router
.route("/rotasprodutos/:id")
.delete((req, res) => produtosController.delete(req, res));

router
.route("/rotasprodutos/:id")
.put((req, res) => produtosController.update(req, res));

module.exports = router;
