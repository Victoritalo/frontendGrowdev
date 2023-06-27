const data = [
  { nome: "Roger Medeiros", sexo: "M", salario: 3250 },
  { nome: "Carolina Silva", sexo: "F", salario: 1200 },
  { nome: "Cristina Avila", sexo: "F", salario: 8100 },
  { nome: "Gustavo Hoffman", sexo: "M", salario: 5200.35 },
  { nome: "Eva Trindade", sexo: "F", salario: 132501 },
  { nome: "Andre Mathias", sexo: "M", salario: 1750 },
  { nome: "Joice Castro da Silva", sexo: "F", salario: 3350.25 },
];

// 1: Imprima no console a quantidade de pessoas Total.
console.log(data.length);

// 2: Imprima no console a quantidade de pessoas pessoas do sexo Feminino.
let count = 0;
for (const fem of data) {
  if (fem.sexo === "F") {
    count++;
  }
}
console.log(`Existem ${count} mulheres neste Array de Objetos`);

// 3: Imprima no console a soma do salário de todas as pessoas.
let sumSalario = 0;
let sumSalarioMasculino = 0;
count = 0;
for (let i = 0; i < data.length; i++) {
  let pessoas = data[i];
  sumSalario += pessoas.salario;
  if (pessoas.sexo === "M") {
    sumSalarioMasculino += pessoas.salario;
    count++;
  }
}
console.log(`Soma de todos os salários: ${sumSalario}`);

// 4: Imprima no console a média do salário de todas as pessoas.
let mediaSalario = sumSalario / data.length;
console.log(`Media salário geral: ${mediaSalario}`);

// 5: Imprima no console a soma do salário de todos as pessoas do sexo Masculino
console.log(`Soma salário Masculino: ${sumSalarioMasculino}`);

// 6: Imprima no console a média do salário de todas as pessoas do sexo Masculino
mediaSalario = sumSalarioMasculino / count;
console.log(mediaSalario);

// 7: Utilize a função Some, para descobrir se existe algum salário superior a R$ 7.000, imprima verdadeiro no console caso exista, caso contrário falso.
// const resultado = data.some(salarioseteMil)
// function salarioSeteMil (acharSalario) {
//     return acharSalario.salario > 7000
// }
// console.log(resultado)
const resultado = (acharSalario) => acharSalario.salario > 7000;
console.log(data.some(resultado));


