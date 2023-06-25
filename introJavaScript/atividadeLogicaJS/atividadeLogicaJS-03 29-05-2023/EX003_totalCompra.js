// Crie três variáveis, na primeira variável coloque o total de uma
// compra, por exemplo 149.90. Na segunda variável coloque a
// quantidade de parcelas, por exemplo 2. Na terceira variável coloque
// o valor da parcela. Apresente no documento html as seguintes
// informações:
// "O valor total da compra foi R$_,_"
// "Forma de pagamento: _x de R$_,_"

let totalValue = 489.95;
let amountinstallments = 5;
let valueInstallments = totalValue / amountinstallments;

console.log(`O valor total da compra foi: ${totalValue}`);
console.log(
  `Forma de pagamento: ${amountinstallments} vezes de ${valueInstallments}`
);

// document.write(
//   `O valor total da compra foi: ${totalValue} <br> Forma de pagamento: ${amountinstallments} vezes de ${valueInstallments}`
// );
