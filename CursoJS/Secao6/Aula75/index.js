const objA = {
  chaveA: "A"
}

const objB = {
  chaveB: "B"
}

const objC = new Object();
objC.chaveC = "C"

Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)

// console.log(objB.chaveA)
// console.log(objC.chaveA)


function Produto(nome, preco){
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function(desconto){
  this.preco = this.preco - (this.preco * (desconto / 100))
}

Produto.prototype.aumento = function(percentual){
  this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto("Camisa", 50)
// p1.desconto(100)
p1.aumento(100)
console.log(p1)

const p2 = {
  nome: "Caneca",
  preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype)
p2.desconto(50)
console.log(p2)

const p3 = Object.create(Produto.prototype, {
  nome: { value:"Caneta", enumerable: true},
  preco: {value: 2, enumerable: true}
})
p3.aumento(100)
console.log(p3)