const data = new Date();

// console.log("Data atual:",data.toString())
// console.log("Dia atual:",data.getDate())
// console.log("Mês:",data.getMonth()+1)
// console.log("Ano:", data.getFullYear())
// console.log("Hora:",data.getHours())
// console.log("Min:", data.getMinutes())
// console.log("Seg:", data.getSeconds())
// console.log("ms:", data.getMilliseconds())
// console.log("Dia da semana:", data.getDay())


function addZero(numero){
  return numero >= 10 ? numero : `0${numero}`
}


function formataData(data){
  const dia  = data.getDate()
  const mes  = data.getMonth() + 1
  const ano  = data.getFullYear()
  const hora  = data.getHours()
  const minutos  = data.getMinutes()
  const segundos  = data.getSeconds()

  return `${ano}/${addZero(mes)}/${addZero(dia)} ${hora}:${minutos}:${segundos}s`



}


const dataBrasil = formataData(new Date())
console.log(dataBrasil)