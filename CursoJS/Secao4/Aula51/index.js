function soma(a, b){
  return a + b
}

console.log(soma(5,2))

function soma2(a, b){
  console.log(a + b)
}

soma2(5,2)

function criaPessoa(nome, sobrenome){
  return {nome,sobrenome}
}

console.log(criaPessoa("Iure", "Lima"))

function falaFrase(comeco){
  function falaResto(resto){
    return comeco + " " + resto;
  }
  return falaResto;
}

const olaMundo = falaFrase("Olá")
console.log(olaMundo("Mundo"))

function criarMultiplicador(multiplicador){
  return function(n){
    return n * multiplicador;
  }
}

console.log(criarMultiplicador(4)(3))