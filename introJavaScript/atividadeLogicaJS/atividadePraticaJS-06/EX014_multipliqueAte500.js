// Leia um número, utilizando WHILE multiplique este número por 3
// enquanto a soma seja menor que 500 e no final mostre qual o
// último valor

let numeroQualquer = 11;
let multi = 0;

while (multi < 500) {
  multi += numeroQualquer;
  numeroQualquer *= 3;
}
console.log(numeroQualquer);
