const originalCPF = "111.111.111-11"

function validandoCPF(){
  const arrayCPF = formataCPF(originalCPF)

  if (arrayCPF.length > 11){
    console.log("CPF fornecido Invalido!")
    return;
  }

  const numerosParaCalculo = arrayCPF.slice(0, -2).map(v => Number(v));

  const CPFGerado = calculoCPF(numerosParaCalculo);

  if (CPFGerado.join("") !== arrayCPF.join("")){
    console.log("CPF fornecido Invalido!")
    return;
  }

  console.log("CPF Válido: ", originalCPF)


}
validandoCPF()


function calculoCPF(numeros){
  numeros = numeros.reverse()

  for (let i = 1; i >= 0; i--){
    const soma = numeros.map((numero, index) => numero * (index + 2)).reduce((a,v) =>{
      return a += v
    })

    const calculo = 11 - (soma % 11)

    if (calculo > 9) numeros.unshift(0)
    else numeros.unshift(calculo)
  }

  return numeros.reverse();
}


function formataCPF(cpf) {
  const regex = /[0-9]/g;
  return cpf.match(regex);
}