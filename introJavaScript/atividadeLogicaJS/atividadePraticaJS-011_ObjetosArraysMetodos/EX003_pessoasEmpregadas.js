// Crie um cadastro de pessoas onde o usuário informe o nome, idade
// e se está trabalhando ou não, se a pessoa estiver trabalhando
// pergunte para ele o salário que está ganhando. Para cada pessoa
// cadastrada, pergunte ao usuário se ele deseja continuar
// cadastrando ou não. No final, mostre as pessoas que estão
// desempregadas, as pessoas que estão empregadas separadas
// pelas que ganham mais que 2500 e menos que 2500.

const arrayPessoas = [
  { nome: "Roger Medeiros", idade: 28, trabalho: true, salario: 2250 },
  { nome: "Carolina Silva", idade: 33, trabalho: false, salario: false },
  { nome: "Cristina Avila", idade: 22, trabalho: true, salario: 8100 },
  { nome: "Gustavo Hoffman", idade: 19, trabalho: false, salario: false },
  { nome: "Eva Trindade", idade: 32, trabalho: true, salario: 132501 },
  { nome: "Andre Mathias", idade: 19, trabalho: false, salario: false },
  { nome: "Joice Castro da Silva",idade: 44,trabalho: true,salario: 2350.25,},
];

let continuar;
let cadastrar;

do {
    const nomePessoa = prompt("Nome");
    const idadePessoa = Number(prompt("Idade"));
    const trabalhoPessoa = prompt(
      "A pessoa está empregada? 'S' para SIM, 'N' para NÃO: "
    );
    const salarioPessoa = Number(
      prompt("Qual seria o salário caso esteja trabalhando?")
    );

  if (trabalhoPessoa === "N") {
    const pessoa = {
      nome: nomePessoa,
      idade: idadePessoa,
      trabalho: false,
      salario: false,
    };
    arrayPessoas.push(pessoa);
  } else {
    const pessoa = {
      nome: nomePessoa,
      idade: idadePessoa,
      trabalho: true,
      salario: salarioPessoa,
    };
    arrayPessoas.push(pessoa);
  }
  continuar = prompt("Deseja continuar? | 'sair' para fechar o APP.")
} while (continuar != "sair");


console.log("Pessoas desempregadas:");
const listaDesempregados = arrayPessoas.forEach(function (pessoa) {
  if (pessoa.trabalho === false && pessoa.salario === false) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
  }
});

console.log("************************");
console.log("Pessoas com salario acima de 2500:");
const salarioAcima = arrayPessoas.forEach(function (pessoa) {
  if (pessoa.trabalho === true && pessoa.salario > 2500) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salario: ${pessoa.salario}`);
  }
});
console.log("************************");
console.log("Pessoas com salario abaixo de 2500:");
const salarioAbaixo = arrayPessoas.filter(function (pessoa) {
  if (pessoa.trabalho === true && pessoa.salario < 2500) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salario: ${pessoa.salario}`);
  }
});
