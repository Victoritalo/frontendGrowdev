/*
Crie uma função que recebe por parâmetro um valor inteiro e
positivo e retorne verdadeiro se o número for primo ou falso se não
for.
*/

// let primo = true;
// for (let i = 2; i < valor; i++) {
//   if (valor % i === 0) {
//     primo = false;
//     break;
//   }
// }

function primoOuNao(inteiro) {
  for (let i = 2; i < inteiro; i++) {
    if (inteiro % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(primoOuNao(5));
