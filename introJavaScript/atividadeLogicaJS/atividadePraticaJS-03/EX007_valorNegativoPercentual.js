// Crie um algoritmo que leia 10 números e determine: 
// - A média dos valores lidos.
// - A quantidade de números positivos.
// - A quantidade de números negativos.
// - O percentual de números positivos e negativos.

let numeroPositivo = 0;
let numeroNegativo = 0;
let somarValores = 0;
let contadorQualquer = 0;
// let numeroQualquer = prompt("Digite um valor");

for (let i = 1; i <= 10; i++) {
  let = numeroQualquer = parseFloat(prompt("Digite um valor"));
  contadorQualquer++;
  somarValores += numeroQualquer;
  if (numeroQualquer > 0) {
    numeroPositivo++;
  } else {
    numeroNegativo++;
  }
}
let mediaTotal = somarValores / contadorQualquer;
let percentualPositivo = (numeroPositivo * 100) / contadorQualquer;
let percentualNegativo = (numeroNegativo * 100) / contadorQualquer;

console.log("Media Total: " + mediaTotal);
console.log("Total de Positivos: " + numeroPositivo);
console.log("Total de Negativos: " + numeroNegativo);
console.log("Percentual Positivos: " + percentualPositivo +"%");
console.log("Percentual Negativos: " + percentualNegativo +"%");

//Usei prompt direto e ficou dando erro com várias casas decimais. Ao usar parseFloat consegui que a media total ficasse correta e com casas decimais corretas.

//No if else dentro do FOR, estava recebendo todos os valores como positivo, até notar que usei somarValores na condição ao invés de "numeroQualquer". Logo, estava somando tudo e ficando positivo ao invés de receber os valores negativos do input.

//Tentei reaproveitar o uso da variável mediaTotal, porém tive resultados errados para negativos e positivos. Teria que ou zerar elas, ou declarar novas variáveis para percentual. Obviamente, farei com novas variáveis para receber o percentual de cada.