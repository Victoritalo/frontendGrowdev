// Utilizar os métodos push, pop, unshift e shift para manipular um
// array
// a. Crie um array com o nome "frutas" e adicione 3 tipos de frutas
// de sua escolha
// b. Utilize o método push para adicionar uma fruta no final do
// array
// c. Utilize o método pop para remover a última fruta do array
// d. Utilize o método unshift para adicionar uma fruta no início do
// array
// e. Utilize o método shift para remover a primeira fruta do array
// f. Exiba o array resultante na tela

let arrFrutas = ["Maçã", "Banana", "Laranja"];
let sair;
console.log("Array original");
console.log(arrFrutas);

do {
  let addFruta = prompt("Digite uma Fruta: ");
  arrFrutas.push(addFruta);
  sair = prompt(
    "Caso deseja continuar, aperte qualquer numero. Caso contrário, digite 'S'."
  );
} while (sair !== "S");
// Fiz também com Do while pra brincar um pouco =)

let addFruta2 = "Tangerina";
let addFruta3 = "Acerola";
let addFruta4 = "Maracujá";
arrFrutas.push(addFruta2, addFruta3, addFruta4);

console.log("Adicionou valores com push:");
console.log(arrFrutas);

let removerUltimoValor = arrFrutas.pop();
console.log("Removeu o último valor com pop:");
console.log(arrFrutas);

let addFrutaNoPrimeiroIndice = "Abacaxi";
arrFrutas.unshift(addFrutaNoPrimeiroIndice);
console.log("Adicionou o valor no primeiro indice com unshift:");
console.log(arrFrutas);

let removerPrimeiroValor = arrFrutas.shift();
console.log("Removeu o valor do primeiro Indice com shift:");
console.log(arrFrutas);

document.write("Por fim, a lista abaixo de tudo que sobrou!<br>");
for (let numQualquer of arrFrutas) {
  document.write(numQualquer + "<br>");
}
