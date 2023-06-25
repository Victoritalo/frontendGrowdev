// Crie um programa que peça um número de 1 a 7 e exiba o dia da
// semana correspondente utilizando a estrutura condicional switch.

const numSemana = 5;
let diaSemana;

switch (numSemana) {
  case 1:
    diaSemana = "Domingo";
    break;

  case 2:
    diaSemana = "Segunda";
    break;

  case 3:
    diaSemana = "Terça";
    break;

  case 4:
    diaSemana = "Quarta";
    break;

  case 5:
    diaSemana = "Quinta";
    break;

  case 6:
    diaSemana = "Sexta";
    break;

  case 7:
    diaSemana = "Sábado";
    break;

  default:
    diaSemana = "Dia da semana inválido!";
    break;
}

console.log(`O dia selecionado é ${diaSemana}`)