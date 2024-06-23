falaOi()
function falaOi(){
  console.log("oi")
}

const souUmDado = function (){
  console.log("Sou um dado")
}
souUmDado()

function executaFuncao(funcao){
  funcao()
}
executaFuncao(souUmDado)

const arrow = () =>{
  console.log("Sou uma arrow function")
}
arrow()