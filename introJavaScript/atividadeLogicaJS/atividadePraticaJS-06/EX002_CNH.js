    const nomePessoa = prompt("Digite seu nome:");
    const idadePessoa = Number(prompt("Digite sua idade:"));
    let possuiHabilitacao = prompt("Possui CNH?");

    if (idadePessoa < 18) {
        document.write(
          `${nomePessoa} tem ${idadePessoa} anos e não tem idade para dirigir ou possuir CNH.`
        );
    } else if (idadePessoa >= 18 && possuiHabilitacao === "SIM") {
        document.write(
          `${nomePessoa} tem ${idadePessoa} anos e está apto para dirigir porque tem CNH.`
        );
    } else if (idadePessoa >= 18 && possuiHabilitacao === "NAO") {
        document.write(
          `${nomePessoa} tem ${idadePessoa} anos, mas não pode dirigir porque não tem CNH.`
        );
    }
