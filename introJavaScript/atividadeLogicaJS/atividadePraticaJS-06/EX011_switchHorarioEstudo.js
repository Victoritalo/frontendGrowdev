// Utilizando Switch, faça um programa que pergunte em que turno
// você estuda. Peça para digitar “M” para matutino ou “V” para
// vespertino ou “N” para noturno. Mostre um alerta com a mensagem
// “Bom dia!” ou “Boa tarde” ou “Boa Noite” ou “Valor inválido”,
// conforme o caso.

// let alturaPessoa = Number(prompt(`Digite sua altura em CM`));
let turno = prompt(
  "Qual seu turno? Digite 'M' para MATUTINO, 'V' para VESPERTINO ou 'N' para NOTURNO."
);

switch (turno) {
  case "M":
    const turnoMatutino = "Bom dia!";
    console.log(turnoMatutino);
    break;
  case "V":
    const turnoVespertino = "Boa tarde!";
    console.log(turnoVespertino);
    break;
  case "N":
    const turnoNoturno = "Boa noite!";
    console.log(turnoNoturno);
    break;

  default:
    const msgError = "Valor Inválido. Tente novamente!";
    console.log(msgError);
    break;
}
