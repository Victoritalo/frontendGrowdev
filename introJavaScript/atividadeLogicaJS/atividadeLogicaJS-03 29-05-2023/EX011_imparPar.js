// Crie um algoritmo que armazene um número inteiro positivo, e gere
// um alerta com as seguintes mensagens:
// a. “Número é par!”, se o valor armazenado for par;
// b. “Número é impar!”, se o valor armazenado for ímpar;

let valueNumber = 8;
let checkNumber = valueNumber % 2;
if (checkNumber == 0) {
  console.log("NÚMERO PAR!");
} else {
  console.log("NÚMERO IMPAR!");
}
