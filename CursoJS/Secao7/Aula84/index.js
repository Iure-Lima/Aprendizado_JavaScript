class ValidadorCPF {
  constructor(cpfPassado){
    this.cpf = cpfPassado;
  }

  validarCPF(){
    if (typeof this.cpf === 'undefined') return false
    if (this.cpf.match(/[0-9]/g).length !== 11) return false
    if (this.isSequencia()) return false

    const cpfParcial = this.cpf.match(/[0-9]/g).slice(0, -2)
    const digito1 = this.criarDigito(cpfParcial)
    cpfParcial.push(digito1)
    const digito2 = this.criarDigito(cpfParcial)
    cpfParcial.push(digito2)

    if (cpfParcial.join("") !== this.cpf.match(/[0-9]/g).join("")) return false

    return true;


  }

  criarDigito(cpfParcial){
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

  isSequencia(){
    return this.cpf[0].repeat(this.cpf.length) === this.cpf;
  }
}


const cpf1 = new ValidadorCPF("077.437.305-90");
console.log(cpf1.validarCPF())