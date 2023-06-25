// Escreva um algoritmo que armazene o preço de tabela e o número
// de vezes em que o pagamento será feito. Calcule o valor de cada
// parcela e o preço total da compra e imprima no console.

let purchaseValue = Number(prompt(`Digite o valor da compra:`));
    
    let numberInstallments;

    do {
      numberInstallments = Number(prompt(`Digite a quantidade de parcelas. Caso seja à vista, digite 01.`));
    } while (!(numberInstallments > 0) || !(numberInstallments < 16));

    let newValue;

    if (numberInstallments === 1) {

      let discountAmount = purchaseValue * 0.025;
      newValue = purchaseValue - discountAmount;

    } else if (numberInstallments >= 2 && numberInstallments <= 5){

      newValue = purchaseValue;

    } else if (numberInstallments >= 6 && numberInstallments <= 10){

      let interestAmount = purchaseValue * 0.06;
      newValue = purchaseValue + interestAmount;

    } else if(numberInstallments >= 11 && numberInstallments <= 15){

      let interestAmount = purchaseValue * 0.06;
      newValue = purchaseValue + interestAmount;

    };

    document.write(`Valor total: R$ ${newValue.toFixed(2)}<br/>`);
    document.write(`O valor das parcelaram ficaram ${numberInstallments}x de R$ ${(newValue / numberInstallments).toFixed(2)}`);