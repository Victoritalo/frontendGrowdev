/*
Escreva um algoritmo para ler uma temperatura em graus Celsius,
calcular e escrever o valor correspondente em graus Fahrenheit.
*/

let temperaturaC = Number(prompt(`Digite a temperatura desejada para conversão:`))
let converterGraus
converterGraus = (temperaturaC * 9/5) + 32
document.write(`${temperaturaC}° Celsius são: ${converterGraus} °Fahrenheit`)
