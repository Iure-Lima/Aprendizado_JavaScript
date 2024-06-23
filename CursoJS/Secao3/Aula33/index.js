const pessoa = {
  nome: "Luiz",
  sobrenome: "Lima",
  idade: 25,
  endereco:{
    rua: "Mandacaru",
    numero: 120
  }
}

//Atribuição via desestruturação
const {nome: nomePessoa = "Não existe", sobrenome} = pessoa
const { endereco: {rua, numero}} = pessoa

console.log(rua, numero)