let varA = "A"; // C
let varB = "B"; // A
let varC = "C"; // B

let temp = varA;

varA = varC
varC = varB
varB = temp;

console.log(varA,varB,varC)