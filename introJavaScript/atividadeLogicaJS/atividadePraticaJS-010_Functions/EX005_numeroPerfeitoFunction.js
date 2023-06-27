/*
Crie uma função que recebe um valor inteiro e retorne verdadeiro se
é um valor perfeito ou falso se não for. Um valor é dito perfeito
quando ele é igual a soma dos seus divisores excetuando ele
próprio.
*/
function verificarPerfeicao(numero) {
    let somaDivisores = 0;
  
    for (let i = 1; i < numero; i++) {
      if (numero % i === 0) {
        somaDivisores += i;
      }
    }
  
    if (somaDivisores === numero) {
      return true; // O número é perfeito
    } else {
      return false; // O número não é perfeito
    }
  }
  
  // Exemplos de uso da função:
  console.log(verificarPerfeicao(6));  // true