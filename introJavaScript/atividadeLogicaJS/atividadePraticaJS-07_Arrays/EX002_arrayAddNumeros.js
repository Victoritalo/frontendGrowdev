// Criar um array e percorrê-lo utilizando o loop for of
// a. Crie um array com o nome "numeros" e adicione 5 números de
// sua escolha
// b. Utilize o loop for of para percorrer o array e exibir a soma dos
// números na tela

let numeros = [];

for (let i = 1; i <= 5; i++) {
  let recebeNumero = Number(prompt("Recebe"));
  numeros.push(recebeNumero);
}

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
