//Classe pai
function Conta(agencia, conta, saldo){
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

//Definindo os método
Conta.prototype.sacar = function(valor){
  if(valor > this.saldo){
    console.log(`Saldo insuficiente: ${this.saldo}`)
    return;
  }

  this.saldo -= valor;
  this.verSaldo();

}
Conta.prototype.depositar = function(valor){
  this.saldo += valor;
  this.verSaldo()
}
Conta.prototype.verSaldo = function(){
  console.log(`Ag/c: ${this.agencia}/${this.conta}`)
  console.log(`SaldoR$:${this.saldo.toFixed(2)}`)
}

//Herança
function ContaCorrente(agencia, conta, saldo, limite){
  Conta.call(this, agencia, conta, saldo)
  this.limite = limite;
}

//Link dos métodos
ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente;

// Polimirfismo do método sacar
ContaCorrente.prototype.sacar = function(valor){
  if(valor > (this.saldo + this.limite)){
    console.log(`Saldo insuficiente: ${this.saldo}`)
    return;
  }

  this.saldo -= valor;
  this.verSaldo();

}

function ContaPoupanca(agencia, conta, saldo){
  Conta.call(this, agencia, conta, saldo)
}

//Link dos métodos
ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaCorrente;


//Instancias
const conta1 = new Conta(11, 22, 500)
conta1.sacar(60)

const conta2 = new ContaCorrente(22,43,80, 2000)
conta2.sacar(2080)

const conta3 = new ContaPoupanca(44,65,70)
conta3.sacar(100)