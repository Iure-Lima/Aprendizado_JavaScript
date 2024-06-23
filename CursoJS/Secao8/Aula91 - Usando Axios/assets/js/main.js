axios('pessoas.json').then(resposta => carregarPessoas(resposta.data))

function carregarPessoas(json){
  const resultado = document.querySelector(".resultado");

  for (let value of json){
    let p = document.createElement("p");
    p.innerHTML = `Nome: ${value.nome}, Idade: ${value.idade}`;
    resultado.appendChild(p)

  }

}