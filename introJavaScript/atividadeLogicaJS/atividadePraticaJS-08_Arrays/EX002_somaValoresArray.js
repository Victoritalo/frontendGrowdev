// Desenvolva um algoritmo para percorrer um vetor de 20 elementos
// inteiros e no final mostre a soma de todos os elementos.
console.log("----------Soma dos Valores da Array----------");
let minhaArray2 = [
  10, 11, 33, 44, 55, 66, 34, 12, 56, 76, 23, 4, 88, 78, 57, 123, 54, 62, 45, 65];

let soma = 0;
for (let i = 0; i < minhaArray2.length; i++) {
  soma += minhaArray2[i];
}
console.log(soma);
//usando for, tive que remover o sinal de igual, pois ele estava percorrendo mais um indice, assim dando undefined e a soma retornava NaN.

soma = 0;
for (const meuBrother in minhaArray2) {
  soma += minhaArray2[meuBrother];
}
console.log(soma);
//Por algum motivo, o forin para exatamente no último indice. Vou pesquisar e entender o por que. No mais, gostei do forin.
