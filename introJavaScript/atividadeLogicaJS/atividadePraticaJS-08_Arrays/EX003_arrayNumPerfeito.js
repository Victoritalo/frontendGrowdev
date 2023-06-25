// Desenvolva um algoritmo que preenche um vetor com os 4
// primeiros números perfeitos.

const recebePerfeito = [];
let numQualquer = 2;
let divisores = 0;
let contador = 0;

while (contador < 4) {
  divisores = 1;
  for (let i = 2; i <= numQualquer / 2; i++) {
    if (numQualquer % i === 0) {
      divisores += i;
    }
  }
  if (divisores === numQualquer) {
    recebePerfeito.push(numQualquer);
    contador++;
  }
  numQualquer++;
}
console.log(recebePerfeito)
