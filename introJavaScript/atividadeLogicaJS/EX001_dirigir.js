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
