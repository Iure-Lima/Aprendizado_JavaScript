const numeros = [1,2,3,4,5,3,9,8,6,4]

for (let numero of numeros){
  if (numero === 2){
    console.log("Pulei o 2")
    continue;
  }
  console.log(numero)
}
console.log("=================================")
for (let numero of numeros){
  if (numero === 9) break;
  console.log(numero)
}