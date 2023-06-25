// Crie duas variáveis. Na primeira coloque um total de minutos e
// defina um valor para ela (por exemplo, minutos = 120). Na segunda
// coloque o total em segundos destes minutos armazenados na
// primeira variável. Apresente no documento html a seguinte
// informação: "_ minutos equivale à _ segundos!"

let minutes = Number(prompt("Digite os minutos"));
let seconds = minutes * 60;

document.write(`${minutes} minutos equivale à ${seconds} segundos!`);
alert(`${minutes} minutos equivale à ${seconds} segundos!`);
