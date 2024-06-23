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

async function executa(){
  try{
    const fase1 =  await printMessage("Frase 1", randomNumber(1,3));
    console.log(fase1);
    const fase2 =  await printMessage(2, randomNumber(1,3));
    console.log(fase2);
    const fase3 =  await printMessage("Frase 3", randomNumber(1,3));
    console.log(fase3);
  }catch (e){
    console.log(e)
  }
  console.log("Finalizando execução")

}

executa()