//Função construtora
function Pessoa(nome, sobrenome){
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function(){ return `${this.nome} ${this.sobrenome}`}

//instância
const p1 = new Pessoa("Iure", "Lima")
const p2 = new Pessoa("Lucas", "Marques")


console.log(p1.nomeCompleto())
console.log(p2.nomeCompleto())