// Desenvolva um algoritmo para ler dois valores e imprimir uma das
// três mensagens a seguir:
// a. ‘Números iguais’, caso os números sejam iguais;
// b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.

let valueOne = Number(prompt("Digite o primeiro número!"));
let valueTwo = Number(prompt("Digite o segundo número!"));

if (isNaN(valueOne && valueTwo)) {
  alert("Apenas números!");
} else if (valueOne > valueTwo) {
  alert("Primeiro valor é maior!");
  document.write("Primeiro valor é maior!");
} else if (valueOne < valueTwo) {
  alert("Segundo valor é maior!");
  document.write("Segundo valor é maior!");
} else if (valueOne === valueTwo) {
  document.write("Números iguais!");
  alert("Números iguais!");
}
