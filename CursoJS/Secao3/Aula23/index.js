/*
&& -> false && true = false
|| -> 


false
0
'' "" ``
- 
- null / undefined
NaN
*/

console.log("Iure" && "Maria")

function falaOi(){
  return "Oi"
}

const vaiExecutar = null

console.log(vaiExecutar && falaOi())

console.log()

console.log("Iure" || "Lima")


const corUsuario = null
const corPadrao = corUsuario || "preto"
console.log(corPadrao)