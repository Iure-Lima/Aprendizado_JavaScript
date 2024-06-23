const botaoEnviar = document.getElementById("enviar")
const inputTexto = document.getElementById("texto")
const chat = document.getElementById("mensagens")


const socket = io() //Aceita a solicitação de comunicação com o servidor


botaoEnviar.addEventListener('click', (event)=>{
  if (inputTexto.value !== ""){
    socket.emit('nova mensagem' /*mensagem*/, inputTexto.value /*valor*/) //Emite um evento
    inputTexto.value = "";
  }
});

socket.addEventListener('nova mensagem', (msg) =>{
  const elementoMensagem = document.createElement('li') //cria uma tag vazia de li
  elementoMensagem.textContent = msg; //atibui a mensagem ao li
  elementoMensagem.classList.add('mensagem'); // adiciona classe ao li

  chat.appendChild(elementoMensagem) // adiciona o li a nossa div chat


}) //atualiza a página toda vez que recebe uma mensagem