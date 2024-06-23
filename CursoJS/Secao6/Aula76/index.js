// Camiseta = cor, caneca = material
//Aumento de preco e desconto
function Produto(nome, preco){
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
  this.preco += quantia;
}
Produto.prototype.desconto = function(quantia){
  this.preco -= quantia;
}

function Camiseta(nome, preco, cor){
  Produto.call(this, nome, preco)
  this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function (percentual) {
  this.preco = this.preco + (this.preco * (percentual/100))
}

function Caneca(nome, preco, material, estoque){
  Produto.call(this, nome, preco)
  this.material = material;

  Object.defineProperty(this,"estoque", {
    enumerable: true,
    configurable: false,
    get: function() {return estoque},
    set: function(value){
      if (typeof value !== "number") return  
      estoque = value
    }
  })
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca;


const camisa = new Camiseta("Regata", 20, "verde")
const caneca = new Caneca("Caneca", 10, "Plastico", 20)

camisa.aumento(100)
caneca.estoque = 100;

console.log(camisa)
console.log(caneca)