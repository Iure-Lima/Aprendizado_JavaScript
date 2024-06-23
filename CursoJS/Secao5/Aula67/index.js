const numeros = [8,10,5,40,23,50,3,20,9,22,21]

const soma = numeros.reduce((acumulador, valor) =>{
  return acumulador + valor;
}, 0)
// console.log(soma)

const pares = numeros.reduce((acumulador, valor) => {
  if (valor % 2 === 0) acumulador.push(valor)
  return acumulador;
}, [])

// console.log(pares)



const pessoas = [
  { nome: 'Fernando', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduarda', idade: 55 },
  { nome: 'Letícia', idade: 60 },
  { nome: 'Rosana', idade: 64 },
  { nome: 'Wallace', idade: 47 }
]

const pessoaMaisVelha = pessoas.reduce((acumulador, valor) => {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor
})

console.log(pessoaMaisVelha)