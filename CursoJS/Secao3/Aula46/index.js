function mostrarHora(){
  const data = new Date();

  return data.toLocaleTimeString("pt-BR", {
    hour12: false
  })
}

const time = setInterval(function (){
  console.log(mostrarHora())
}, 1000)

setTimeout(function (){
  clearInterval(time)
}, 5000)