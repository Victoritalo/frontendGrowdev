// Para o mesmo exercício acima insira mais uma variável a
// condicional, além de saber se o motorista tem 18 anos ou mais,
// temos que saber também se ele é habilitado para dirigir. Caso ele
// tenha idade maior ou igual a 18 anos e possua habilitação, insira no
// html “Pode dirigir” caso contrário imprima “Não pode dirigir”.

const nomePessoa = prompt("Digite seu nome:");
const idadePessoa = Number(prompt("Digite sua idade:"));
const possuiHabilitacao = prompt(
  "Possui Habilitação? Responda com 'S' para SIM e 'N' para NÃO!"
);

if (idadePessoa >= 18 && possuiHabilitacao == "S") {
  document.write(
    `${nomePessoa} tem ${idadePessoa} anos, possui habilitação e está apto para dirigir.`
  );
} else {
  document.write(
    `${nomePessoa} tem ${idadePessoa} anos. Não possui idade suficiente e/ou habilitação para dirigir.`
  );
}
