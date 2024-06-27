const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65,91))
const geraMinuscula = () => String.fromCharCode(rand(97,123))
const geraNumeros = () => String.fromCharCode(rand(48,58));
const simbolos = '~^[]{}!@#$%()_+-*/.'
const geraSimbulos = () => simbolos[rand(0, simbolos.length)]


export default function geraSenha(qtd,  maiusculas=false, minusculas=false, numeros=false, simbolos=false){
  qtd = Number(qtd);
  const senha = []

  for (let i = 0; i < qtd; i++){
    maiusculas && senha.push(geraMaiuscula())
    minusculas && senha.push(geraMinuscula())
    numeros && senha.push(geraNumeros())
    simbolos && senha.push(geraSimbulos())
  }
  return senha.join("").slice(0, qtd)
}