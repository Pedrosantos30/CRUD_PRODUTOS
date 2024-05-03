

const mongoose = require('mongoose');
const { Schema } = mongoose;
const rotasprodutosSchema = new Schema({
  Cod: { type: Number, required: true },
  Data: { type: String, required: true },
  Categoria: { type: String, required: true },
  Descrição: { type: String,  required: true },
  ml: { type: String,  required: true },
  Quantidade: { type: String,  required: true },
  Região: { type: String,  required: true },
  TipoCliente: { type: String,  required: true },
  Valor: { type: String,  required: true },
  },
  { timestamps: true }
);

const Produtos = mongoose.model('Produtos', rotasprodutosSchema);

module.exports = {
  Produtos,
  rotasprodutosSchema,
};
