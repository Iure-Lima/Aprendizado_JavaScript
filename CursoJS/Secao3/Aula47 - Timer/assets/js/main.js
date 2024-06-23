function getTimeFormSecond(segundos){
  
  return new Date(segundos * 1000).toLocaleTimeString("pt-BR", {
    hour12:false,
    timeZone: "UTC"
  })
}

const relogio = document.querySelector("#time")
const iniciar = document.querySelector("#iniciar")
const pausar = document.querySelector("#pausar")
const zerar = document.querySelector("#zerar")

let segundos = 0;
let timer;


function inicarTimer(){
  timer = setInterval(function (){
    segundos++;
    relogio.innerHTML = getTimeFormSecond(segundos)
  }, 1000)
}

//Forma 1

document.addEventListener("click",function (e){
  const el = e.target;
  if (el.id === "iniciar"){
    clearInterval(timer)
    inicarTimer()
    relogio.classList.remove("pausado")
  }else if (el.id === "pausar"){
    clearInterval(timer)
    relogio.classList.add("pausado")
  }else if (el.id === "zerar"){
    clearInterval(timer)
    relogio.innerHTML = "00:00:00"
    segundos = 0;
    relogio.classList.remove("pausado")
  }
})

//Forma 2
// iniciar.addEventListener("click", function (event){
//   clearInterval(timer)
//   inicarTimer()
//   relogio.classList.remove("pausado")
// })

// pausar.addEventListener("click", function (event){
//   clearInterval(timer)
//   relogio.classList.add("pausado")
// })

// zerar.addEventListener("click", function (event){
//   clearInterval(timer)
//   relogio.innerHTML = "00:00:00"
//   segundos = 0;
//   relogio.classList.remove("pausado")
// })