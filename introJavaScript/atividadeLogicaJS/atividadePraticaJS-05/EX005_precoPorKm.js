// Faça um algoritmo que pergunte a distância que um passageiro
// deseja percorrer em Km. Calcule o preço da passagem, cobrando
// R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
// longas.

let distanciaKm = 200;
let precoDistancia;

for (let i = 0; i <= distanciaKm; i++) {
  if (distanciaKm <= 200) {
    precoDistancia = 0.5
    precoDistancia *= distanciaKm;
  } else {
    precoDistancia = 0.45;
    precoDistancia *= distanciaKm;
  }
}
console.log(precoDistancia);

