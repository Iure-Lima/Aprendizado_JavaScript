const NOME = "Iure";
const SOBRENOME = "Lima"
const IDADE = 20;
const PESO = 84;
const ALTURA = 1.80;
let imc = PESO / (ALTURA * ALTURA);
let anoNascimento = (new Date().getFullYear()) - IDADE;
new Date().
console.log(NOME, SOBRENOME, "tem",IDADE, "anos, pesa",PESO,"Kg")
console.log("tem", ALTURA,"de altura e se IMC é de", imc)
console.log(NOME,"nasceu em",anoNascimento)