function saudacao(nome){
  return `Bom dia ${nome}!`
}

const variavel = saudacao("Iure");
console.log(variavel)

function soma(x,y){
  return x + y
}

console.log(soma(2,4))
console.log(soma(3,4))
console.log(soma(4,4))
console.log(soma(5,4))

const raiz = function(number){
  return Math.sqrt(number);
}

console.log(raiz(9))

const raiz2 = (number) =>{return Math.sqrt(number)};
console.log(raiz2(9))