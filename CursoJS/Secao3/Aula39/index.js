// let controller = 0;

// while (controller <= 10 ){
//   console.log(controller) ;
//   controller++;
// }


function randomNumber(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}

const min = 0;
const max = 100;
let random = randomNumber(min, max)
let controller = 1;

while (random !== 10){
  console.log(`Passo: ${controller} = `, random)
  random = randomNumber(min,max)
  controller++;
}

do {
  console.log("Olá Mundo")
  random = 2
}while(randomNumber === 10)