//Filtrar pares
//Dobrar valores
// Somar tudo

const numeros = [8,10,5,40,23,50,3,20,9,22,21]
const newNumeros = numeros.filter(n => n % 2 === 0).map(n => n *2).reduce((acumulador, number) => acumulador + number, 0)
console.log(newNumeros)