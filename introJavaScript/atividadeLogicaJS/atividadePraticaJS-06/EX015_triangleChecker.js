// Crie um algoritmo que armazene três valores, para cada um dos
// lados de um triângulo: A, B e C. Verifique se os lados fornecidos
// formam realmente um triângulo. Se formar, deve mostrar no console
// o tipo de triângulo: isósceles, escaleno ou equilátero.
// a. Para verificar se os lados fornecidos formam um triângulo: A <
// B + C e B < A + C e C < A + B.
// b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
// B=C);
// c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
// B<>C e A<>C);
// d. Triângulo equilátero: possui todos os lados iguais (A=B e
// B=C);

alert("Bem vindo ao Triangle Checker!");
alert("Para escaleno, o valor inicial deve ser maior que 1(um)");
let valorA = Number(prompt(`Digite o valor A`));
let valorB = Number(prompt(`Digite o valor B`));
let valorC = Number(prompt(`Digite o valor C`));

if (isNaN(valorA + valorB + valorC)) {
  alert(`Digite somente numeros, por favor!`);
} else if (
  valorA + valorB > valorC &&
  valorA + valorC > valorB &&
  valorB + valorC > valorA
) {
  if (valorA === valorB && valorA === valorC) {
    alert(`Triangulo equilátero!`);
    document.write(
      `O triângulo equilátero é um tipo de triângulo que possui os três lados congruentes (mesma medida).`
    );
  } else {
    if (valorA === valorB || valorA === valorC || valorB === valorC) {
      alert(`Triangulo isósceles!`);
      document.write(
        `Triângulo isósceles é um polígono que apresenta três lados, sendo dois deles congruentes (mesma medida).`
      );
    } else if (valorA != valorB && valorB != valorC && valorA != valorC) {
      alert(`Triangulo escaleno!`);
      document.write(
        `Triângulo escaleno é o polígono que possui três lados com diferentes medidas e três ângulos diferentes.`
      );
    }
  }
} else {
  alert(`Os valores digitados não formam um triangulo!`);
}
