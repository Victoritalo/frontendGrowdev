const salarios = [
  5000.0, 5460.5, 3452.0, 6900.0, 7590.1, 8012.99, 1290.0, 15000.0,
];

// a. Imprima no console o índice do primeiro salário maior que 7.500 utilizando o findIndex
const acharSalario = salarios.findIndex(function (salario) {
  return salario > 7500;
});
console.log(acharSalario);

// b. Crie uma nova lista filtrada com os salários que são maior que 8.000 utilizando o filter
const filtrarSalarios = salarios.filter((salario) => salario > 8000);
console.log(filtrarSalarios);
