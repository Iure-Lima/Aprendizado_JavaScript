function ValidaCPF(cfpEnviado){
  Object.defineProperty(this, "cpfLimpo",{
    get: function () {
      return cfpEnviado.match(/[0-9]/g).join("")
    }
  })
}

ValidaCPF.prototype.valida = function(){
  if (typeof this.cpfLimpo === 'undefined') return false
  if (this.cpfLimpo.length !== 11) return false
  if (this.isSequencia()) return false

  const cpfParcial = this.cpfLimpo.slice(0, -2)
  const digito1 = this.criaDigito(cpfParcial)
  const digito2 = this.criaDigito(cpfParcial + digito1)

  const cpfNew = cpfParcial + digito1 + digito2;

  if (cpfNew !== this.cpfLimpo) return false

  return true;
}

ValidaCPF.prototype.criaDigito = function(cpfParcial){
  const cpfArray = Array.from(cpfParcial)
  let regressivo = cpfParcial.length + 1;

  const total = cpfArray.map((num) => {
    const valor = Number(num) * regressivo;
    regressivo--;
    return valor;
  }).reduce((ac, valor)=>{
    return ac += valor;
  }, 0)

  const digito = 11 - (total % 11);
  return digito > 9 ? "0" : digito.toString();

}

ValidaCPF.prototype.isSequencia = function(){
  return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
}


const cpf = new ValidaCPF("111.111.111-11")
console.log(`O CPF informado é ${cpf.valida() ? "valido" : "invalido"}`)