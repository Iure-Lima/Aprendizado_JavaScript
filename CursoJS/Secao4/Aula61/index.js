function* geradora1(){
  //Código qualquer
  yield "Valor 1";

  //Código qualquer
  yield "Valor 2";

  //Código qualquer
  yield "Valor 3";
}

function* geradora2(){
  let i = 0;

  while (true){
    yield i;
    i++
  }
}

function* geradora3(){
  yield 1
  yield 2
  yield 3
}

function* geradora4(){
  yield* geradora3()
  yield 4
  yield 5
  yield 6
}

function* geradora5(){
  yield function(){
    console.log("Vim do Y1")
  }

  yield function(){
    console.log("Vim do Y2")
  }

  yield function(){
    console.log("Vim do Y3")
  }
}


const g1 = geradora1();
// console.log(g1.next().value)
// console.log(g1.next().value)
// console.log(g1.next().value)
// for (let i of g1){
//   console.log(i)
// }

const g2 = geradora2()
// for (let i = 0; i < 100; i++){
//   console.log(g2.next().value)
// }

const g4 = geradora4()
// for (let num of g4){
//   console.log(num)
// }

const g5 = geradora5()
g5.next().value()
g5.next().value()
g5.next().value()
