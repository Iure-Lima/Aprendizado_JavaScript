const alunos = ["Ana", "Maria", "Lucas", "Marcos"];
console.log(alunos)

alunos[0] = "Patrick";
console.log(alunos)

alunos[4] = "Luan";
console.log(alunos)

console.log(alunos.length)

alunos[alunos.length] = "Hadja";
alunos[alunos.length] = "Bruna";
alunos[alunos.length] = "Willian";
console.log(alunos)


alunos.push("Felipe")
console.log(alunos)

// alunos.unshift("Felipe")
// console.log(alunos)

const removido = alunos.pop();
console.log(removido)


console.log(alunos.shift())

