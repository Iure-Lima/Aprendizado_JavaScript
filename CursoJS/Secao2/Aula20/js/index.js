function escopo(){
    const form = document.querySelector("form");

    const pessoas = [];

    function addPessoa(evento){
      evento.preventDefault();
      
      let nome = document.getElementById("name").value;
      let sobrenome = document.getElementById("lastName").value;
      let peso = Number(document.getElementById("peso").value);
      let altura = Number(document.getElementById("altura").value);
      let result = document.getElementById("result");

      //Adicionando a pessoa recem criada
      pessoas.push({
        nome: nome,
        sobrenome:sobrenome,
        peso:peso,
        altura:altura
      })

      //Adicionando na tela
      result.innerHTML += `<p>${nome} ${sobrenome} Altura: ${peso} Peso:${altura}</p>`

      //Imprimindo o valor do array
      console.log(pessoas)
    }

    form.addEventListener("submit", addPessoa)



}
escopo();