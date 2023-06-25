/*
Crie um objeto para colocar nome e duas notas. Atribua nome e
duas notas para o primeiro objeto, que será nosso primeiro aluno.
Agora crie mais um objeto para colocar informações do nosso
segundo aluno. Mostre as informações de cada aluno no console.
Mostre também a média do primeiro aluno e a média do segundo
aluno. Por fim mostre a média desta turma de 2 alunos.
*/
const arrayAlunos = [
  { nome: "Victor", nota: [10, 9.1] },
  { nome: "Zézinho", nota: [8.8, 9] },
  { nome: "Ricardo", nota: [8, 9] },
];

//Queria usar ou forof ou forin para pegar os valores e indices do array de notas, mas não consegui e nem queria partir para uma solução pronta de internet. Fiz com for tradicional cujo é o que sei lidar melhor.

let media = 0;
let somaTotal = 0;
for (let i = 0; i < arrayAlunos.length; i++) {
  let soma = 0;
  let aluno = arrayAlunos[i];
  console.log("Informações do aluno " + (i + 1) + ":");
  console.log(`Nome: ${aluno.nome} | Notas: ${aluno.nota}`);
  for (let x = 0; x < aluno.nota.length; x++) {
    soma += aluno.nota[x];
  }
  media = soma / aluno.nota.length;
  console.log(`Média de ${aluno.nome}: ${media.toFixed(2)}`);
  somaTotal += media;
}
console.log("---------------------------------");
let mediaTotalTurma = somaTotal / arrayAlunos.length;
console.log("Media da turma: " + mediaTotalTurma.toFixed(2));


//Embora pareça complexo(para mim), consegui compreender melhor fazendo assim. A resolução da media total(turma) demorou um tempinho, pois eu estava fazendo outro for e dentro havia outro for. Quando notei que era possível reaproveitar o for já existente, parti para a solução apresentada acima.
