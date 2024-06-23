const btnPlayPause = document.getElementById("play-pause");
const btnAvancar = document.getElementById("proximo")
const btnVoltar = document.getElementById("anterior")

const audioPlayer = document.getElementById("audio-capitulo");
const capitulo = document.getElementById("capitulo")


const numeroCapitulos = 10;
let estaTocando = false;
let capituloAtual = 1;
const caminho = "./books/dom-casmurro/"



function tocarFaixa(){
  audioPlayer.play();
    
  btnPlayPause.classList.remove("bi-play-circle-fill")
  btnPlayPause.classList.add("bi-pause-circle-fill")
}

function pausarFaixa(){
  audioPlayer.pause();
  
  btnPlayPause.classList.remove("bi-pause-circle-fill")
  btnPlayPause.classList.add("bi-play-circle-fill")
}

function tocarOuPausar(){

  if (estaTocando){
    pausarFaixa()
    estaTocando = false;
  }else{
    tocarFaixa()
    estaTocando = true;
  }

  
}

function proximaFaixa(){
  if (capituloAtual === numeroCapitulos){
    capituloAtual = 1;
  }else{
    capituloAtual += 1;
  }
  capitulo.innerHTML = `Capítulo ${capituloAtual}`;
  audioPlayer.src = caminho + capituloAtual + ".mp3"
  tocarFaixa()
  estaTocando = true;
  
}

function voltarFaixa(){
  if (capituloAtual !== 1){
    capituloAtual -= 1;
    capitulo.innerHTML = `Capítulo ${capituloAtual}`;
    audioPlayer.src = caminho + capituloAtual + ".mp3"
    tocarFaixa()
    estaTocando = true;
  }

  
  
}

btnPlayPause.addEventListener("click", tocarOuPausar)
btnAvancar.addEventListener("click", proximaFaixa)
btnVoltar.addEventListener("click", voltarFaixa)