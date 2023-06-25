// Crie cinco variáveis. Na primeira armazene o nome de um aluno. Na
// segunda, terceira e quarta coloque 3 notas (valores de 0 à 10).
// Calcule a média das notas e armazene na quinta variável criada.
// Apresente no documento html a seguinte informação:
// "O aluno _____ ficou com média _,_"

const student = "Naldo Soco de 2Toneladas";
const gradePointOne = 10;
const gradePointTwo = 9;
const gradePointThree = 8;
const result = (gradePointOne + gradePointTwo + gradePointThree) / 3;

document.write(`O aluno ${student} ficou com média: ${result}!`);
console.log(`O aluno ${student} ficou com média: ${result}!`);
