// Atividade 1
const receba = Number (prompt('What is your age:'));
const myAge = 22
document.write(`I am ${myAge} years old.`);
console.log(`I am ${myAge} years old.`)

// Atividade 2
const numOne = 20//Number (prompt('Digite o primeiro valor:'));
const numTwo = 30//Number (prompt('Digite o segundo valor:'));
let resultado = numOne + numTwo

document.write(`<br><br>A soma do resultado de ${numOne} + ${numTwo} é: ${resultado}!`)
console.log(`A soma do resultado de ${numOne} + ${numTwo} é: ${resultado}!`)

// Atividade 3
const valorTotal = 500//Number (prompt('Digite o valor da sua compra:'));
const parcelaQtd = 5//Number (prompt('Em quantas vezes quer parcelar?'));
let resultadoParcela = valorTotal / parcelaQtd
document.write(`<br><br>Sua compra foi dividida em ${parcelaQtd} vezes de R$:${resultadoParcela},00`)

// Atividade 4
let valorMinutos = 120//Number (prompt('Digite os minutos'));
let valorSegundos = valorMinutos*60
document.write(`<br><br>${valorMinutos} tem ${valorSegundos} segundos!`)

//Atividade 5
const nomeAluno = (prompt('Digite o nome do Aluno:'));
const primeiraNota = Number (prompt('Digite o primeiro valor:'));
const segundaNota = Number (prompt('Digite o segundo valor:'));
const terceiraNota = Number (prompt('Digite o terceiro valor:'));
let resultadoNota = (primeiraNota + segundaNota + terceiraNota) / 3
document.write(`<br><br>O Aluno${nomeAluno} ficou com média ${resultadoNota}!`)







