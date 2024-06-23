function criaPessoa(nome, sobrenome, altura, peso){
  return {
    //Atributos
    nome: nome,
    sobrenome: sobrenome,
    altura: altura,
    peso: peso,
    //Método
    IMC(){
      console.log(`Seu IMC é ${(this.peso / (this.altura ** 2)).toFixed(2)}`)
    },
    //Getter
    get nomeCompleto(){
      return `${this.nome} ${this.sobrenome}`
    },
    //Setter
    set nomeCompleto(valor){
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ")
    }
  }
}

const p1 = criaPessoa("Iure", "Lima", 1.75, 80)
p1.IMC()
p1.nomeCompleto = "Maria Lima Joana de Caprio"
console.log(p1.nomeCompleto)