const data = new Date()
const diaSemana = data.getDay()

switch (diaSemana){
  case 0:
    console.log("Hoje é domingo")
    break
  case 1:
    console.log("Hoje é segunda")
    break
  case 2:
    console.log("Hoje é terça")
    break
  case 3:
    console.log("Hoje é quarta")
    break
  case 4:
    console.log("Hoje é quinta")
    break
  case 5:
    console.log("Hoje é sexta")
    break
  case 6:
    console.log("Hoje é Sabado")
    break
  default:
    console.log("ERROR")
}