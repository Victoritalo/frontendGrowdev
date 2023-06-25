// Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
// Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
// Construa um algoritmo que calcule e imprima quantos anos serão
// necessários para que:
// a. Lucas e Pedro tenham o mesmo tamanho;
// b. Lucas seja maior que Pedro.

let alturaPedro = 1.5;
let alturaLucas = 1.1;
let anosMesmaAltura = 0;
let anosLucasMaior = 0;

do {
  alturaPedro += 0.02;
  alturaLucas += 0.03;
  anosMesmaAltura++;
} while (alturaLucas <= alturaPedro)
console.log("Irá levar " + anosMesmaAltura + " anos para que Pedro e Lucas tenham a mesma altura. " + " Pedro com: " + alturaPedro.toFixed(1) + ", Lucas com: " + alturaLucas.toFixed(1));

anosLucasMaior = anosMesmaAltura;

do {
  alturaPedro += 0.02;
  alturaLucas += 0.03;
  anosLucasMaior++;
} while (alturaPedro > alturaLucas)

console.log("Irá levar " + anosLucasMaior + " anos para que Pedro e Lucas tenham a mesma altura. " + " Pedro com: " + alturaPedro.toFixed(2) + ", Lucas com: " + alturaLucas.toFixed(2));
console.log("---------------------------")
console.log(anosMesmaAltura)
console.log(anosLucasMaior)