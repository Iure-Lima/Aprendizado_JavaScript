class DispositivoEletronico{
  constructor(name){
    this.name = name;
    this.ligado = false;
  }

  ligar(){
    if (this.ligado) return;
    this.ligado = true
  }

  desligar(){
    if (!this.ligado) return;
    this.ligado = false;
  }
}

class Smartphone extends DispositivoEletronico{
  constructor(name, color, modelo){
    super(name);
    this.color = color;
    this.modelo = modelo;
  }
}

class Tablet extends DispositivoEletronico{
  constructor(name, color){
    super(name);
    this.color = color;
  }

  ligar(){

    //Sobreescrevendo o método ligar da classe pai - Polimorfismo
    console.log("Este dispositivo esta ligando")
  }

  mensagem(){
    console.log("Seja bem vindo ao table")
  }
}

const s1 = new Smartphone("Iphone", "Preto", "Iphone 11");
console.log(s1)

const t1 = new Tablet("Samsung tablet", "Rosa");
console.log(t1)
t1.ligar()
t1.mensagem()