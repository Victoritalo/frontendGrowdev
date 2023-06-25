// Desenvolva um algoritmo que armazene o valor 10 em uma variável
// A e o valor 20 em uma variável B. A seguir (utilizando apenas
// atribuições entre variáveis) troque os seus conteúdos fazendo com
// que o valor que está em A passe para B e vice-versa. Ao final,
// escrever os valores que ficaram armazenados nas variáveis.

let a = 10;
let b = 20;
let temp = a;
a = b;
b = temp;

// document.write(`O valor A antes era 10, agora é ${a} <br> O valor B antes era 20, agora é ${b}`)

console.log(
  `O valor A antes era 10, agora é ${a} - O valor B antes era 20, agora é ${b}!`
);
