// try{
//   console.log(name)
// }catch (err) {
//   console.log("Não existe a variável name")
//   console.log(err)
// }


function soma(x, y){
  if (typeof x !== 'number' || typeof y !== 'number') throw new Error("Invalid")
  return x + y;
}



try{
  const somando = soma(4, '8')
  console.log(somando)
}catch (err){
  console.log("Os valores fornecidos não são apenas números")
  console.log(err)
}