// Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).
let anoNascimento;
let anoAtual = new Date().getFullYear();
let resultIdade;

do {
  anoNascimento = Number(prompt("Digite o ano em que nasceu:"));
} while (isNaN(anoNascimento));

resultIdade = anoAtual - anoNascimento;

if (resultIdade < 16) {
  console.log("Usuário possui " + resultIdade + " anos e não pode votar!");
} else if ((resultIdade >= 16 && resultIdade < 18) || resultIdade > 65) {
  console.log("Usuário possui " + resultIdade + " anos.");
  console.log("Categoria: Eleitor com voto facultativo!");
} else {
  console.log("Usuário possui " + resultIdade + " anos.");
  console.log("Categoria: Eleitor com voto obrigatório!");
}
