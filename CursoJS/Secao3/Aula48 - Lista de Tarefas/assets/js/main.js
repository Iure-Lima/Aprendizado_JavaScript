const input = document.querySelector("#tarefaInput")
const listaTarefas = document.querySelector("#listaTarefas")
const addButton = document.querySelector("#add")

function salvaTarefas(){
  const tarefasLI = listaTarefas.querySelectorAll("li")
  const tarefas = []

  for (let tarefa of tarefasLI) {
    tarefas.push(tarefa.innerText.replace("Apagar", ""))
  }
  
  const tarefasJSON = JSON.stringify(tarefas)
  localStorage.setItem("tarefas", tarefasJSON)
}

function criaElementoLI(){
  return document.createElement("li")
}

function limpaInput(){
  input.value = "";
  input.focus()
}

function criaElementoButton(li){
  const btnApagar = document.createElement("button")
  btnApagar.innerText = "Apagar"
  btnApagar.setAttribute("class", "btnApagar")
  btnApagar.setAttribute("title", "Apagar essa Tarefa")
  btnApagar.classList.contains
  li.appendChild(btnApagar)
}

function criaTarefa(texto){
  const li = criaElementoLI()
  li.innerText = texto
  listaTarefas.appendChild(li)

  criaElementoButton(li)
  limpaInput()
  salvaTarefas()
}

function renderizarTarefasSalvas(){
  const tarefas = localStorage.getItem("tarefas")
  const listaDeTarefas = JSON.parse(tarefas)

  for (const tarefa of listaDeTarefas) {
    criaTarefa(tarefa)
  }
}

addButton.addEventListener("click", function(e){
  if (input.value !== ""){
    criaTarefa(input.value)
  }
  
})

input.addEventListener("keypress", function(e){
  if (e.keyCode === 13){
    if (input.value !== ""){
      criaTarefa(input.value)
    }
  }
  
})

document.addEventListener("click", function(e){
  const el = e.target
  if (el.classList.contains("btnApagar")){
    el.parentElement.remove()
    salvaTarefas()
  }
})

renderizarTarefasSalvas()