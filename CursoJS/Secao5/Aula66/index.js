const numeros = [8,10,5,40,23,50,3,20,9,22,21]

const doubleNumeros = numeros.map(n => n * 2).map(n => n - 1)
// console.log(doubleNumeros)



const pessoas = [
  { nome: 'Fernando', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduarda', idade: 55 },
  { nome: 'Letícia', idade: 60 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
]

const nomePessoas = pessoas.map(pessoa => pessoa.nome)
const idadePessoas = pessoas.map(pessoa => ({idade: pessoa.idade}))
const newPessoas = pessoas.map((pessoa, index) => {
  const newPessoa = {id: index + 1, ...pessoa}
  return newPessoa
})
console.log(pessoas)
console.log(nomePessoas)
console.log(idadePessoas)
console.log(newPessoas)