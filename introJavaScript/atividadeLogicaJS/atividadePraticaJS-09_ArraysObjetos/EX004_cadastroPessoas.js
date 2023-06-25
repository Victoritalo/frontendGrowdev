// Crie um cadastro de pessoas onde o usuário informe o nome, idade
// e se está trabalhando ou não, se a pessoa estiver trabalhando
// pergunte para ele o salário que está ganhando. Para cada pessoa
// cadastrada, pergunte ao usuário se ele deseja continuar
// cadastrando ou não. No final, mostre as pessoas que estão
// desempregadas, as pessoas que estão empregadas separadas
// pelas que ganham mais que 2500 e menos que 2500.

const arrayPessoas = [];

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

for (const pessoa of arrayPessoas) {
  if (pessoa.trabalho === false && pessoa.salario === false) {
    console.log("Pessoas desempregadas:");
    console.log(`Nome: ${pessoa.nome}; Idade: ${pessoa.idade};`);
  }
  if (pessoa.trabalho === true && pessoa.salario < 2500) {
    console.log("Salários menores que 2500:");
    console.log(
      `Nome: ${pessoa.nome}; Idade: ${pessoa.idade}; Salario: ${pessoa.salario};`
    );
  }
  if (pessoa.trabalho === true && pessoa.salario > 2500) {
    console.log("Salários acima que 2500:");
    console.log(
      `Nome: ${pessoa.nome}; Idade: ${pessoa.idade}; Salario: ${pessoa.salario};`
    );
  }
}
