// Tendo como entrada a altura e o sexo (codificado da seguinte
//     forma: 1 para sexo feminino e 2 para sexo masculino) de uma
//     pessoa, construa um programa que calcule e mostre seu peso ideal,
//     utilizando as seguintes fórmulas:
//     - para homens: (72.7 * Altura) – 58
//     - para mulheres: (62.1 * Altura) – 44.7

let alturaPessoa = Number(prompt(`Digite sua altura em CM`));
let sexo = Number(prompt(`Digite 1 para FEM 2 para MASC`));

switch (sexo) {
  case 1:
    const pesoMulher = (62.1 * alturaPessoa) / 100 - 44.7;
    console.log("Seu peso ideal é: " + pesoMulher.toFixed(2) + " Kg.");
    break;
  case 2:
    const pesoHomem = (72.7 * alturaPessoa) / 100 - 58;
    console.log("Seu peso ideal é: " + pesoHomem.toFixed(2) + " Kg.");
    break;

  default:
    console.log("Ocorreu um erro. Tente novamente!");
    break;
}
