function randomNumber(min, max){
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function printMessage(msg, time){
  return new Promise((resolve, reject) =>{
    if (typeof msg !== 'string') {
      reject("Bad Value")
      return;
    }
    setTimeout(() =>{
      resolve(msg)
    }, time)
  });
}


const promises = [
  printMessage("Promise 1", randomNumber(1,3)),
  printMessage("Promise 2", randomNumber(1,3)),
  printMessage("Promise 3", randomNumber(1,3)),
  printMessage(1000, randomNumber(1,3))

];

Promise.all(promises).then((resultado) =>{
  console.log(resultado)
}).catch((e) => console.log(e))


function baixaPagina(){
  const emCache = true;
  if (emCache) return Promise.reject("Página em cache")
  else return printMessage("Aguarde baixar a página", 2000)
}

baixaPagina().then((value) =>{
  console.log(value)
}).catch(e => console.log(e))