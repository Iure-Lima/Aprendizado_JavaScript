const imagemVisualizacao = document.getElementById("imagem-visualizacao")


const azulInverno = {
  nome: "Azul-Inverno",
  pasta: "imagens-azul-inverno"
}

const verdeCipreste = {
  nome: "Verde-Cipreste",
  pasta: "imagens-verde-cipreste"
}

const meiaNoite = {
  nome: "Meia-Noite",
  pasta: "imagens-meia-noite"
}

const estelar = {
  nome: "Estelar",
  pasta: "imagens-estelar"
}

const rosaClaro = {
  nome: "Rosa-Claro",
  pasta: "imagens-rosa-claro"
}

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro]

const opcoesTamanho = ["41 mm", "45 mm"];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImagem(){
  const IDOpcaoSelecionada = document.querySelector('[name= "opcao-imagem"]:checked').id;
  imagemSelecionada = Number(IDOpcaoSelecionada.charAt(0))

  imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-${imagemSelecionada}.jpeg`
  
}

function trocarTamanho(){
  const tituloProdutoTamanho = document.querySelector("#titulo-produto #tamanho");
  const IDOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;


  tamanhoSelecionado = Number(IDOpcaoSelecionada.charAt(0))
  tituloProdutoTamanho.innerText = `${opcoesTamanho[tamanhoSelecionado]}`;

  if (opcoesTamanho[tamanhoSelecionado] === "41 mm"){
    imagemVisualizacao.classList.add("caixa-pequena")
  }else{
    imagemVisualizacao.classList.remove("caixa-pequena")
  }

  
}

function trocarCor(){
  
  const nomeCorSelecionada = document.getElementById("nome-cor-selecionada")
  const tituloCorSelecionada = document.querySelector("#titulo-produto #cor")
  const opcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id
  
  const miniaturaImagem0 = document.getElementById("0-imagem-miniatura")
  const miniaturaImagem1 = document.getElementById("1-imagem-miniatura")
  const miniaturaImagem2 = document.getElementById("2-imagem-miniatura")

  corSelecionada = Number(opcaoSelecionada.charAt(0))

  nomeCorSelecionada.innerText = `Cor - ${opcoesCores[corSelecionada].nome}` 
  tituloCorSelecionada.innerText = opcoesCores[corSelecionada].nome;

  miniaturaImagem0.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-0.jpeg`
  miniaturaImagem1.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-1.jpeg`
  miniaturaImagem2.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-2.jpeg`
  trocarImagem()
  
}