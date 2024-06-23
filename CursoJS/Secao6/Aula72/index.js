function Produto(nome, preco, estoque){
  this.nome = nome;
  this.preco = preco

  Object.defineProperty(this /*Referencia do objeto*/, "estoque" /*Nome da propriedade*/, {
    enumerable: true,
    configurable: false,
    get: function() {
      return estoque;
    },
    set: function(value){
      if (typeof value !== "number") return;

      estoque = value
    }
    /*Lista de configurações*/
  })
}


const p1 = new Produto("Camiseta", 10, 1000)
console.log(p1)
console.log(p1.estoque)

p1.estoque = 20
console.log(p1.estoque)