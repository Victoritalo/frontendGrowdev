let minhaArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let minhaArray2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let minhaArray3 = [];

let recebeValor;
for (let i = 0; i < minhaArray.length; i++) {
  // recebeValor = minhaArray[i]
  minhaArray3.push(minhaArray[i]);
}
console.log("Nova array com valores da Array 1: " + minhaArray3);
for (let i = 0; i < minhaArray2.length; i++) {
  // recebeValor = minhaArray2[i]
  minhaArray3.push(minhaArray2[i]);
}
//Testei usando variável e deu certo, é o que parecia lógico. Por curiosidade, testei inserindo os valores diretamente usando array[i] e também deu o mesmo resultado. Não sei se é legal fazer isso, mas funciona.
console.log("Nova array com valores da Array 1 e 2: " + minhaArray3);
console.log(minhaArray3);
