// Desafio Ilhas Growdev
// Existem notas de GC$ 50,00, GC$ 10,00, GC$ 5,00 e GC$ 1,00.

let valorSaque = prompt("Digite um valor!");
let nota50 = 0;
let nota10 = 0;
let nota5 = 0;
let nota1 = 0;

while (valorSaque > 0) {
  if (valorSaque >= 50) {
    valorSaque = valorSaque - 50;
    nota50++;
  } else if (valorSaque >= 10) {
    valorSaque = valorSaque - 10;
    nota10++;
  } else if (valorSaque >= 5) {
    valorSaque = valorSaque - 5;
    nota5++;
  } else if (valorSaque >= 1) {
    valorSaque = valorSaque - 1;
    nota1++;
  }
}

console.log("GC$ 50 --> " + nota50);
console.log("GC$ 10 --> " + nota10);
console.log("GC$ 5 --> " + nota5);
console.log("GC$ 1 --> " + nota1);
