class Categoria {
  constructor(id, nome) {
    this.id = id;
    this.nome = nome;
    this.produtos = [];
  }


  adicionarProduto(produto) {
    this.produtos.push(produto);
  }


  listarNomesProdutos() {
    return this.produtos.map((produto) => produto.nome);
  }

  
  valorTotalEmEstoque() {
    return this.produtos.reduce(
      (total, produto) => total + produto.preco * produto.estoque,
      0
    );
  }
}

module.exports = Categoria;