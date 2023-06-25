// Escreva um algoritmo que solicite 2 números e uma operação
// matemática. O algoritmo deve realizar o cálculo com os 2 números
// digitados conforme a operação informada.

let valorOne = 5
let operador = "*"
let valorTwo = 5

switch (operador) {
  case "+":
    resultado = valorOne + valorTwo;
    break;
  case "-":
    resultado = valorOne - valorTwo;
    break;
  case "*":
    resultado = valorOne * valorTwo;
    break;
  case "/":
    resultado = valorOne / valorTwo;
    break;
  default:
    console.log("Não reconheço o operador digitado!");
    resultado = undefined;
    break;
}

console.log(
  `O resultado de ${valorOne} ${operador} ${valorTwo} é: ${resultado}!`
);
