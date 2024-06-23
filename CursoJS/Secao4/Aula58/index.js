function Pessoa(nome, sobrenome, idade){
  const ID = 1;
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;

  this.apresentar = function(){
    console.log(`Olá, me chamo ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos`)
  }
  const carregar = function(){
    console.log("Carregando dados...")
  }
  carregar()
}

const p1 = new Pessoa("Iure", "Lima", 20)
p1.apresentar()

const p2 = new Pessoa("Patrick", "Cavalcante", 19)
p2.apresentar()