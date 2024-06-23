const numeros = [8,10,5,40,23,50,3,20,9,22,21]

// console.log("Método de filtrar sem usar o filter")
const numerosMaior10 = []
for (let i = 0; i<numeros.length;i++){
  if (numeros[i] > 10){
    numerosMaior10.push(numeros[i])
  }
}
// console.log(numeros)
// console.log(numerosMaior10)


// console.log("Usando o filter")
const numeros2 = numeros.filter(numero => numero > 10)
// console.log(numeros)
// console.log(numeros2)

const pessoas = [
  { nome: 'Fernando', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduarda', idade: 55 },
  { nome: 'Letícia', idade: 60 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
]

const pessoas2 = pessoas.filter(p => p.nome.length >= 5).filter(p => p.idade > 50)
.filter(p => p.nome.toLocaleLowerCase().endsWith("a"))
console.log(pessoas2)
