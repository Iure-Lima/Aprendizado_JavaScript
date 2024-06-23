const pessoa = {
  nome: "Iure",
  sobrenome:"Lima"
};

const chave = "nome"


console.log(pessoa[chave], pessoa.sobrenome)

const carro = new Object();
carro.marca = "Ferrari"
carro.modelo = "Ferrari 3GT"
carro.ligar = function (){
  console.log(`O ${this.modelo} esta dando partida`)
}

carro.ligar()