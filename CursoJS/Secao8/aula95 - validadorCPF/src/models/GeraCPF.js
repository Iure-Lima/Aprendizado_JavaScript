import ValidadorCPF from "./ValidadorCPF";

export default class GeraCPF{
  rand(min = 100000000, max = 999999999){
    return String(Math.floor(Math.random() * (max - min) + min))
  }

  formatado(cpf){
    return `${cpf.slice(0,3)}.${cpf.slice(3,6)}.${cpf.slice(6,9)}-${cpf.slice(9,11)}`
  }

  geraNovoCPF(){
    const cpfSemDigito = this.rand();
    const digitoUm = ValidadorCPF.criarDigito(cpfSemDigito)
    const digitoDois = ValidadorCPF.criarDigito(cpfSemDigito + digitoUm)
    const novoCPF = cpfSemDigito + digitoUm + digitoDois
    return novoCPF;
  }
}