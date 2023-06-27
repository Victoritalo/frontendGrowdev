/*
Crie uma função que recebe por parâmetro o tempo de duração de
uma fábrica expressa em segundos e retorna esse tempo em horas,
minutos e segundos.
*/

function tempoFabrica(tempo) {
  let horas = tempo / 3600;
  let minutos = (tempo % 3600) / 60;
  let segundos = (tempo % 3600) % 60;

  return horas.toFixed(0)+":"+minutos.toFixed(0)+":"+segundos.toFixed(0)
}

console.log(tempoFabrica(3672))