const pessoas = [
  { id: 1, nome: "Iure"},
  { id: 2, nome: "Willian"},
  { id: 3, nome: "Patrick"},
  { id: 4, nome: "Bruna"},
  { id: 5, nome: "Elisa"}
]

const novasPessoas = new Map()
pessoas.forEach((pessoa) => {
  const {id} = pessoa;
  novasPessoas.set(id, {...pessoa})
})

console.log(novasPessoas)
console.log(novasPessoas.get(2))