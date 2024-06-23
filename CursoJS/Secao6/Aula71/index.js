function Produto(nome, preco, estoque){
  Object.defineProperties(this /*Referencia do objeto*/, {
    nome/*Nome da propriedade*/: {
      value: nome,
      enumerable: true,
      writable: false,
      configurable: false
    }/*Lista de configurações*/, 
    preco: {
      value: preco,
      enumerable: true,
      writable: true,
      configurable: false
    }
  })

  Object.defineProperty(this /*Referencia do objeto*/, "estoque" /*Nome da propriedade*/, {
    value: estoque,
    enumerable: true,
    writable: false,
    configurable: false
    /*Lista de configurações*/
  })
}


const p1 = new Produto("Camiseta", 10, 1000)
console.log(p1)
p1.preco = 20
console.log(p1)