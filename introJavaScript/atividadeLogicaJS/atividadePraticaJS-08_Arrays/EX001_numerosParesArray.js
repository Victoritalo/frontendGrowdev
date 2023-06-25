// Desenvolva um algoritmo para percorrer um vetor de 15 elementos
// inteiros já preenchido e imprima todos os valores pares.

console.log("----------Numeros Pares Array----------");
let minhaArray = [10, 11, 33, 44, 55, 66, 34, 12, 56, 76, 0, 4, 88, 78, 57];

for (let i = 0; i <= minhaArray.length; i++) {
  let contadorVitaum = minhaArray[i];
  if (contadorVitaum % 2 == 0) {
    console.log(contadorVitaum);
  }
}
//Sofri um pouco nessa, pois de cara o loop for tradicional me deu apenas alguns resultados, então notei que ele tava trazendo os valores pares apenas da iteração do próprio loop, não do vetor.

// for (const xablau of minhaArray) {
//     if(xablau%2 == 0){
//         console.log(xablau)
//     }
// }

//Obviamente usando forof foi fácil demais, zero dificuldade.
