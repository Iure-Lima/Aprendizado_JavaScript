function randomNumber(min, max){
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function printMessage(msg, time){
  return new Promise((resolve, reject) =>{
    if (typeof msg !== 'string') reject("Bad Value")
    setTimeout(() =>{
      resolve(msg)
    }, time)
  });
}

printMessage("Conexão com o DB", randomNumber(1,3))
  .then(response =>{
    console.log(response)
    return printMessage("Buscando dados do DB", randomNumber(1,3))
  })
  .then(response =>{
    console.log(response)
    return printMessage("Tratando os dados", randomNumber(1,3))
  })
  .then(response =>{
    console.log(response);
  })
  .then(() =>{
    console.log("Exibindo os dados");
  })
  .catch(e =>{
    console.log("Error: "+e)
  })
  .finally(() => console.log("Fechando a conexão"))