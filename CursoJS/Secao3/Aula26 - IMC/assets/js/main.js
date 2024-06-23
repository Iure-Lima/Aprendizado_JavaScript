const form = document.querySelector('form');

  function submitForm(evento){
    evento.preventDefault();

    let peso = document.getElementById("peso");
    let altura = document.getElementById("altura");
    let res = document.getElementById("result");

    if (!Number(peso.value)){
      res.innerHTML = "<p>Peso Inválido!</p>"
      res.style.background = "red"

    }else if (!Number(altura.value)){
      res.innerHTML = "<p>Altura Inválido!</p>"
      res.style.background = "red"

    }else{
      let imc = Number(peso.value) / (Number(altura.value) * Number(altura.value))

      if (imc < 18.5){
        res.innerHTML = `<p>Seu IMC é ${imc} (Abaixo do peso)</p>`
      }else if (imc >= 18.5 && imc <= 24.9){
        res.innerHTML = `<p>Seu IMC é ${imc} (Peso normal)</p>`

      }else if (imc >= 25 && imc <= 29.9){
        res.innerHTML = `<p>Seu IMC é ${imc} (Sobrepeso)</p>`
      }else if (imc >= 30 && imc <= 34.9){
        res.innerHTML = `<p>Seu IMC é ${imc} (Obesidade grau 1)</p>`
      }else if (imc >= 35 && imc <= 39.9){
        res.innerHTML = `<p>Seu IMC é ${imc} (Obesidade grau 2)</p>`
      }else if (imc >= 40){
        res.innerHTML = `<p>Seu IMC é ${imc} (Obesidade grau 3)</p>`
      }

      res.style.background = "green"
    }

  }

  form.addEventListener('submit', submitForm)

