import gerador from './geradores';

export default () =>{

  const quantidade = document.querySelector("#quantidade");
  const numeros = document.querySelector("#numeros");
  const letrasMaiusculas = document.querySelector("#letras-maiusculas");
  const letrasMinusculas = document.querySelector("#letras-minusculas");
  const simbolos = document.querySelector("#simbolos");

  if (numeros.checked || letrasMaiusculas.checked || letrasMinusculas.checked || simbolos.checked) {
    return gerador(quantidade.value, letrasMaiusculas.checked, letrasMinusculas.checked, numeros.checked, simbolos.checked)
  }else{
    return "Selecione uma opção"
  }

}