// function soma(){
//   let total = 0;
//   for (let number of arguments) {
//     total += number;
//   }
//   console.log(total)
// }
// soma(1,2,3,4,5,6,7,8,9,10)

// function funcao(a,b,c,d,e,f){
//   console.log(a,b,c,d,e,f)
// }
// funcao(1,2,3,4)

// function somando(a,b = 2, c = 3){
//   console.log(a + b + c)
// }
// somando(1, undefined, 2)

function conta(operador, acumulador, ...numeros){
  for (let numero of numeros){
    switch (operador){
      case "+": 
        acumulador += numero
        break
      case "-":
        acumulador -= numero
        break
      case "/":
        acumulador /= numero
        break
      case "*":
        acumulador *= numero
        break
      default:
        console.log("Operador invalido")
    }
  }

  console.log(`A valor da operação (${operador}) em [${numeros}] é ${acumulador}`)
}
conta("+", 0, 20,30,40,50)