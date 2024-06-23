const pessoa1 = {
  nome: "Iure",
  sobrenome: "Lima",
  idade: 20
};

console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade)

function criarPessoa(nome, sobrenome, idade){
  return { nome, sobrenome, idade:idade};
}

const pessoa2 = criarPessoa("Marcos", "Lino", 26)
console.log(pessoa2.nome)

const pessoa3 = {
  nome: "Patrick",
  sobrenome: "Cavalcanti",
  idade: 19,
  apresentar(){
    console.log(`Olá, meu nome é ${this.nome}`)
  }
};

pessoa3.apresentar()