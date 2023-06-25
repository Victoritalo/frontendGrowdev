// Crie uma função que recebe um vetor de inteiros e um número
// inteiro e retorne verdadeiro se o número faz parte do vetor ou falso
// se não faz parte.
console.log("----------True False Valor Array----------");
let trueFalseArray = [
  10, 11, 33, 44, 55, 66, 34, 12, 56, 76, 23, 4, 88, 78, 57, 123, 54, 62, 45,
  65, "Ricardo"
];

let numeroAProcurar = "Ricardo";
let resultado = false
for(let i = 0; i < trueFalseArray.length; i++){
    if(numeroAProcurar === trueFalseArray[i]) {
        resultado = true
    } 
}

console.log(resultado)