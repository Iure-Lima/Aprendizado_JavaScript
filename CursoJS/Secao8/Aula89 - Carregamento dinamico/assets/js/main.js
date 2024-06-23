const request = (obj) =>{
  return new Promise((resolve, reject) =>{
    //Instancia do obj
    const xhr = new XMLHttpRequest();

    xhr.open(obj.method /*Método HTTP*/, obj.url /*URL*/, true);
    xhr.send() //Envia a request

    //Função que chama quando a request esta pronta
    xhr.onload = () =>{
      if (xhr.status >= 200 && xhr.status < 300){ //Verifica o estado da request
        resolve(xhr.responseText); //retorna a resposta de maneira textual
        return;
      }

      reject({
        code: xhr.status, // retorna o numero do estado
        msg: xhr.statusText // retorna o texto do estado
      })

    };
  })
};

//escuta os eventos de cliques nos links
document.addEventListener('click', function(e){
  const elemento = e.target;
  const tag =  elemento.tagName.toLowerCase();

  if (tag === 'a'){
    e.preventDefault(); // Previne o evento
    carregaPagina(elemento)
  }
})

async function carregaPagina(elemento){
  const href = elemento.getAttribute('href'); //Pegar o valor href do link
  
  const objConfig = { // Chama nossa função de request
    method: 'GET',
    url: href
  }

  try{
    //fazendo o request
    const response = await request(objConfig)
    carregaResultado(response)
  }catch (err){
    console.log(err)
  }
}

function carregaResultado(response){
  const res = document.querySelector('.resultado');
  res.innerHTML = response;
}