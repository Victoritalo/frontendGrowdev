// Escreva um algoritmo que tenha como valores de entradas o nome
// e idade do usuário e imprima no terminal o nome, a idade e o ano
// de nascimento do usuário. Ex: “Nome: Pedro, Idade: 22 anos, nasceu
// em 2000”.
// OBS: Pegue o ano atual como base

let userName = prompt("Seu nome");
let bornIn = Number(prompt("Ano em que nasceu"));
let currentTime = new Date();
let currentYear = currentTime.getFullYear();
let userAge = currentYear - bornIn;

document.write(`Nome: ${userName}, Idade: ${userAge}, nasceu em: ${bornIn}`);
console.log(`Nome: ${userName}, Idade: ${userAge}, nasceu em: ${bornIn}`);
