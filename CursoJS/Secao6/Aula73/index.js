const produto = {nome: "caneca", valor: 10}
const produto2 = Object.assign({}, produto, {material: "platico", quantidade: 4})

produto2.nome = "Canetas"
// console.log(produto, produto2)
// console.log(Object.getOwnPropertyDescriptor(produto, "nome"))
// console.log(Object.getOwnPropertyDescriptors(produto, "nome", "valor"))

const pessoa = {
  nome: "Iure",
  sobrenome: "Silva",
  idade: 20
}
const valores = Object.entries(pessoa)
console.log(valores) // Retorna [ [ 'nome', 'Iure' ], [ 'sobrenome', 'Silva' ], [ 'idade', 20 ] ]