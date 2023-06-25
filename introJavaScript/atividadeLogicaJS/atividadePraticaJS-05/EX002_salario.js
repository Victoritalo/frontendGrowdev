// Desenvolva um aplicativo que leia o salário e o sexo de vários
// funcionários. No final, mostre o total de salários pagos aos homens e
// o total pago às mulheres. O programa vai perguntar ao usuário se
// ele quer continuar ou não sempre que ler os dados de um
// funcionário.

let salarioHomem = 0;
let salarioMulher = 0;
let continuar = "S";

while (continuar === "S") {
  let salario = parseInt(prompt("Digite o salário do funcionário(a)"));
  let sexoFuncionario = prompt(
    "Defina o sexo 'M' para MULHER, 'H' para HOMEN: "
  );

  if (sexoFuncionario == "M") {
    salarioMulher += salario;
  } else {
    salarioHomem += salario;
  }
  continuar = prompt(
    "Deseja continuar? 'S' para sim, qualquer tecla para NÃO!"
  );
}

console.log("Total de salário para Mulheres: " + salarioMulher);
console.log("Total de salário para Homens: " + salarioHomem);
