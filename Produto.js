class Produto {
  #preco;
  #estoque;

  constructor(id, nome, preco, estoque) {
    this.id = id;
    this.nome = nome;

    this.preco = preco;
    this.estoque = estoque;
  }

  get preco() {
    return this.#preco;
  }

  set preco(valor) {
    if (typeof valor !== "number" || Number.isNaN(valor)) {
      throw new Error("Preco deve ser um numero");
    }
    if (valor <= 0) {
      throw new Error("Preco deve ser maior que zero");
    }
    this.#preco = valor;
  }

  get estoque() {
    return this.#estoque;
  }

  set estoque(valor) {
    if (typeof valor !== "number" || Number.isNaN(valor)) {
      throw new Error("Estoque deve ser um numero");
    }
    if (valor < 0) {
      throw new Error("Estoque nao pode ser negativo");
    }
    this.#estoque = valor;
  }

  temEstoque(quantidade = 1) {
    return this.#estoque >= quantidade;
  }

  aplicarDesconto(percentual) {
    if (percentual < 0 || percentual > 100) {
      throw new Error("Percentual de desconto deve estar entre 0 e 100");
    }
    const novoPreco = this.#preco - (this.#preco * percentual) / 100;
    this.preco = novoPreco; 
    }

  toJSON() {
    return {
      id: this.id,
      nome: this.nome,
      preco: this.preco,
      estoque: this.estoque,
    };
  }
}


module.exports = Produto;
