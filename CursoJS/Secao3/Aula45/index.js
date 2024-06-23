// try{
//   console.log("Abrir o arquivo")
//   console.log("Manipulando o arquivo")
// }catch (err){
//   console.log("Tratar o erro")
// }finally{
//   console.log("Fechar o arquivo")
// }

function retornaHora(data){
  if (data && !(data instanceof Date)){
    throw new TypeError("Esperando uma instância de Date.")
  }

  if (!data) data = new Date()
  
  return data.toLocaleTimeString('pt-BR',{
    hour12: false
  })

}

try{
  const hora = retornaHora()
  console.log(hora)
}catch (e){
  //Tratar erro
}finally{
  console.log("Tenha um bom dia")
}
