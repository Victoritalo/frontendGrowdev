// As maçãs desta estação custam R$0,30 se forem compradas
// menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
// doze. Desenvolva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

let amountApples = Number(prompt("Quantas maçãs deseja comprar?"));
let price = 0.3;
let valueResult;
if (isNaN(amountApples)) {
  alert("Apenas números!");
} else if (amountApples < 12) {
  valueResult = (price * amountApples).toFixed(2);
  document.write(
    `A compra de ${amountApples} maçãs por ${price} deu: R$ ${valueResult}`
  );
} else if (amountApples >= 12) {
  price = 0.25;
  valueResult = (price * amountApples).toFixed(2);
  document.write(
    `A compra de ${amountApples} maçãs por ${price} deu: ${valueResult} R$`
  );
}
