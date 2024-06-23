/*
Primitivos (imutaveis) - string, number, boolean, undefined, null

Referencia  (mutavel) - arrys, objetos, function
*/

let nome = "Luiz";
nome = "Iure";
console.log(nome);

let a = "A";
let b = a;
console.log(a,b)
a = "Outra coisa"
console.log(a,b)

let arr = [1, 2,4]
let arr2 = arr
console.log(arr, arr2)
arr.push(3)
console.log(arr, arr2)