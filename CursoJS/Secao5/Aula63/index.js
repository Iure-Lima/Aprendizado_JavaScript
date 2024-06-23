const nomes = ["Maria", "João","Iure", "Marcos", "Fernando"]

//método splice = Array.splice(indexDeInicio, quantidadeDeElementosARemover, element1, element2)
const pessoa = nomes.splice(-1,1)
console.log(nomes) //["Maria", "João","Iure", "Marcos"]
console.log(pessoa.toString()) //"Fernando"
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")

//Adicionando elementos
nomes.splice(-1, 0 , "Patrick","Willian","Bruna")
console.log(nomes)
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")

//Substituindo
const pessoaSubstituida = nomes.splice(4,1,"Lucas")
console.log(nomes)
console.log(pessoaSubstituida)
console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")