// Crie uma variável para ler a idade de um motorista. Caso o
// motorista tenha idade maior ou igual a 18 anos imprime no console
// “Pode dirigir”, caso contrário imprima “Não pode dirigir”.

const nomePessoa = prompt("Digite seu nome:");
const idadePessoa = Number(prompt("Digite sua idade:"));

if (idadePessoa < 18) {
  document.write(
    `${nomePessoa} tem ${idadePessoa} anos e não tem idade para dirigir ou possuir CNH.`
  );
} else if (idadePessoa >= 18) {
  document.write(
    `${nomePessoa} tem ${idadePessoa} anos e está apto para dirigir.`
  );
}
