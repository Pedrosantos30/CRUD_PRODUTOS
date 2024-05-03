const {Produtos:ProdutosModel} = require('../models/Produtos');


const produtosController = {
create: async (req, res) => {
    try {
    const rotasprodutos = {
      Cod: req.body.Cod,
      Data: req.body.Data,
      Categoria: req.body.Categoria,
      Descriçao: req.body.Descriçao,
      ml: req.body.ml,
      Quantidade: req.body.Quantidade,
      Regiao: req.body.Regiao,
      TipoCliente: req.body.TipoCliente,
      Valor: req.body.Valor,
    };
    const response = await ProdutosModel.create(rotasprodutos);

    res.status(201).json({response, msg:"Produto criado com sucesso"})
  } catch(error) {
  console.log(error);
  }
  }, 
  getAll: async (req,res) => {
    try {
      const rotasprodutos = await ProdutosModel.find();

      res.json(rotasprodutos);
    } catch (error) {
      console.log(error)
      
    }
  },
  get: async (req, res) => {
    try {

      const id = req.params.id;
      const rotasprodutos = await ProdutosModel.findById(id);

      // Caso a busca por um produto seja um id que não existe
      if(!rotasprodutos){
        res.status(404).json({msg:"Produto não encontrado"});
        return;
      }

      res.json(rotasprodutos);

    } catch (error) {
      console.log(error)
      
    }
  },
  delete: async (req, res) => {
    try {

      const id  = req.params.id;
      const rotasprodutos = await ProdutosModel.findById(id);

      // Caso a exclusao de um produto seja um id que não existe
      if(!rotasprodutos){
        res.status(404).json({msg:"Produto não encontrado"});
        return;
      }

      const deletedProdutos = await ProdutosModel.findByIdAndDelete(id);
      res.status(200).json({deletedProdutos, msg: "Produto deletado com sucesso"});
      
    } catch (error) {
      console.log(error)
      
    }
  },
  update: async (req, res) => {

    const id  = req.params.id;

    const rotasprodutos = {
      Cod: req.body.Cod,
      Data: req.body.Data,
      Categoria: req.body.Categoria,
      Descriçao: req.body.Descriçao,
      ml: req.body.ml,
      Quantidade: req.body.Quantidade,
      Regiao: req.body.Regiao,
      TipoCliente: req.body.TipoCliente,
      Valor: req.body.Valor,
    };

    const updatedProdutos = await ProdutosModel.findByIdAndUpdate(id, rotasprodutos);
            
    // Caso a atualização de um produto seja um id que não existe 
     if(!updatedProdutos){
      res.status(404).json({msg:"Produto não encontrado"});
      return;
    }
    res.status(200).json({rotasprodutos, msg: "Produto atualizado com sucesso!"})



  }
};


module.exports = produtosController;