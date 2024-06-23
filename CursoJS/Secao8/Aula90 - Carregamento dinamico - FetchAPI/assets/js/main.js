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

  try{
    const response = await fetch(href)

    if (response.status !== 200) throw new Error("Error Critical")

    const html = await response.text()
    carregaResultado(html)
  }catch(e){
    console.error(e)
  }
  
  
}

function carregaResultado(response){
  const res = document.querySelector('.resultado');
  res.innerHTML = response;
}