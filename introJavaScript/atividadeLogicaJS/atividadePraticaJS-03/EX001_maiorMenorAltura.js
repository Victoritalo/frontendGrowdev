// Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
// programa deverá calcular e mostrar:
// a. A menor altura do grupo;
// b. A maior altura do grupo;

let menorAltura = 999;
let maiorAltura = 0;

for (let i = 0; i <= 15; i++) {
  const lerAltura = parseFloat(prompt(`Digite a ${i}° Altura:`));
  if (lerAltura < menorAltura) {
    menorAltura = lerAltura;
  }

  if (lerAltura > maiorAltura) {
    maiorAltura = lerAltura;
  }
}
console.log("Maior altura do grupo: " + maiorAltura);
console.log("Menor altura do grupo: " + menorAltura);
