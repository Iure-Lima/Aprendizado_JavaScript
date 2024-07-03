const path = require('path')
const escritor = require('./models/escrever')
const leitor = require('./models/ler')
const caminhoArquivo = path.resolve(__dirname,"..", "teste.json")

const pessoas = [
  {
    nome:"Iure",
    idade: 20
  },
  {
    nome:"Marcos",
    idade: 30
  },
  {
    nome:"Laura",
    idade: 24
  },
  {
    nome:"João",
    idade: 34
  }
]

const json = JSON.stringify(pessoas, "", 2)
//escritor(caminhoArquivo, json)

dadosLidos = converteArquivo(leitor(caminhoArquivo))
dadosLidos.forEach((valor) =>{
  console.log(valo)
})

function converteArquivo(dados){
  return [...JSON.parse(dados)]
}