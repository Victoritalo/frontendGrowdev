// Informe um valor a uma variável e imprima no console se o número
// é primo.
let valor = 0;

while (!(valor > 0) || isNaN(valor) || valor == null) {
  valor = Number(prompt("Informe um numero inteiro:"));
}

let primo = true;
for (let i = 2; i < valor; i++) {
  if (valor % i === 0) {
    primo = false;
    break;
  }
}
console.log(primo ? "É PRIMO" : "NÃO É PRIMO");
