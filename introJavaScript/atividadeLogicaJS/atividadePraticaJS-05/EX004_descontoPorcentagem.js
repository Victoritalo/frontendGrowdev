// Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
// descontos para todos, mas especialmente para mulheres. Faça um
// programa que leia nome, sexo e o valor das compras do cliente e
// calcule o preço com desconto. Sabendo que:
// a. Homens ganham 5% de desconto
// b. Mulheres ganham 13% de desconto

let nome = "Carla";
let sexo = "M";
let totalCompra = 895.50;
let valorFinal;
let valorDesconto;

if (sexo == "M") {
  valorDesconto = 0.13;
} else if (sexo == "H") {
  valorDesconto = 0.5;
}
valorFinal = totalCompra - (totalCompra * valorDesconto);

console.log("Cliente: " + nome);
console.log("Desconto: " + (valorDesconto*100) + "%" +" | R$ " +(totalCompra-valorFinal).toFixed(2));
console.log("De: R$ " + totalCompra + " | Por: R$ " + valorFinal.toFixed(2));
