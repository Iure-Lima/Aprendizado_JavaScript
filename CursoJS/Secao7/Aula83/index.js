class ControleRemoto{
  constructor(tv){
    this.tv = tv;
    this.volume = 0;
  }

  //Método de instancia
  aumentarVolume(){
    if (this.volume >= 100) return
    this.volume += 2;
  }

  //Método de instancia
  diminuirVolume(){
    if (this.volume <= 0) return
    this.volume -= 2;
  }

  //Método estatico
  static trocaPilha(){
    console.log("Trocando pilha")
  } 
}

//Chamando a instancia Não podemos usar o trocaPilha
const c1 = new ControleRemoto("LG")
console.log(c1)

//Maneira de usar o método estatico
ControleRemoto.trocaPilha()