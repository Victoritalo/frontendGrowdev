// Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
// número de 1 a 7 e imprimir no console o dia da Semana. Para este
// exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
// por diante. Caso o número recebido não esteja neste intervalo
// imprimir “Dia não reconhecido”.

const diaSemana = Number(prompt("Digite um numero de 1 a 7"));

if (isNaN(diaSemana) || diaSemana <= 0 || diaSemana > 7 || diaSemana == "") {
  alert(`Somente numeros de 1 a 7`);
} else if (diaSemana === 1) {
  document.write("Hoje é Segunda");
} else if (diaSemana === 2) {
  document.write("Hoje é Terça");
} else if (diaSemana === 3) {
  document.write("Hoje é Quarta");
} else if (diaSemana === 4) {
  document.write("Hoje é Quinta");
} else if (diaSemana === 5) {
  document.write("Hoje é Sexta");
} else if (diaSemana === 6) {
  document.write("Hoje é Sabado");
} else if (diaSemana === 7) {
  document.write("Hoje é Domingo");
} else {
  document.write(`Valeu falouuuuu`);
}
