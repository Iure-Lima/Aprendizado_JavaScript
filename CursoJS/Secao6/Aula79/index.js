//Método
const falar = {
  falar(){
    console.log(`${this.nome} esta falando oi`)
  }
}

const comer = {
  comer(){
    console.log(`${this.nome} esta comendo`)
  }
}


//Objeto com os métodos do proto
const pessoaPrototype = Object.assign({}, falar, comer)


//Função fabrica
function criaPessoa(nome, sobrenome){
 //Retorno do objeto
 return Object.create(pessoaPrototype, {nome: {value:nome}, sobrenome: {value:sobrenome}})
}

//Intacia
const pessoa1 = criaPessoa("Iure", "Lima")
pessoa1.falar()