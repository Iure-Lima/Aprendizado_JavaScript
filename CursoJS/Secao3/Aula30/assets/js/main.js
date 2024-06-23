function renderizar(){
  const texto = document.querySelector(".container h1")

  const data = new Date()
  data.getMonth

  texto.innerHTML = `${formateSemana(data.getDay())}, ${formateData(data)}`

}

function formateData(data){
  return `${data.getDate()} de ${formateMes(data.getMonth() + 1)} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`

}

function formateMes(mes){
  switch(mes){
    case 1:
      return "janeiro"
    case 2:
      return "fevereiro"
    case 3:
      return "março"
    case 4:
      return "abril"
    case 5:
      return "maio"
    case 6:
      return "junho"
    case 7:
      return "julho"
    case 8:
      return "agosto"
    case 9:
      return "setembro"
    case 10:
      return "outubro"
    case 11:
      return "novembro"
    case 12:
      return "dezembro"
  }

}

function formateSemana(diaSemana){
  switch(diaSemana){
    case 0:
      return "Domingo"
    case 1:
      return "Segunda-feira"
    case 2:
      return "Terça-feira"
    case 3:
      return "Quarta-feira"
    case 4:
      return "Quinta-feira"
    case 5:
      return "Sexta-feira"
    case 6:
      return "Sabado-feira"
  }

}

// renderizar()


/*Outra opção de estar realizando a mesma coisa só que de maneira mais fácil é usando as linhas abaixo*/
const texto = document.querySelector(".container h1")
const data = new Date()

texto.innerHTML = data.toLocaleString('pt-BR', {dateStyle: "full",timeStyle: "short"})