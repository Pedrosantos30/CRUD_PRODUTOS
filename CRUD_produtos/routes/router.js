const router = require("express").Router()

const rotasprodutosRouter = require("./rotasprodutos")

router.use("/", rotasprodutosRouter);

module.exports = router;





