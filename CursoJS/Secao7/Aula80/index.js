class Pessoa{
  constructor(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  apresentar(){
    console.log("Meu nome  é "+ this.nome)
  }
}

const pessoa = new Pessoa("Iure", "Lima", 20);
pessoa.apresentar()