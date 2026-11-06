# Unidade 2 — Código de referência

Classes `Produto` e `Categoria` (orientação a objetos + módulos CommonJS),
testadas por um script de linha de comando, sem nenhum servidor HTTP ainda.

## Estrutura

```
src/models/Produto.js    -> classe com encapsulamento (#preco, #estoque)
src/models/Categoria.js  -> classe com composição (tem uma lista de Produtos)
teste.js                 -> script que importa e testa as duas classes
```

## Como rodar

```bash
node teste.js
```

## O que observar

- Os campos `#preco` e `#estoque` só podem ser alterados através dos
  `get`/`set`, que validam a regra de negócio antes de aceitar o valor.
- `teste.js` mostra, com `try/catch`, o que acontece quando tentamos
  burlar essa validação atribuindo um preço negativo.
- Essas mesmas classes serão reaproveitadas dentro do ShopAPI a partir
  da Unidade 3 (e, na Unidade 6, ganharão uma versão equivalente feita
  com Sequelize, para persistir os dados em banco).
