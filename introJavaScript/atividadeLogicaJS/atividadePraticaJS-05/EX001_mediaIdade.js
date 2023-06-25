// Desenvolva um algoritmo para ler as idades de vários alunos em uma turma. O programa deve encerrar quando a idade 999 for digitada. No final, exiba o número total de alunos na turma e a média de idade do grupo.

let somarIdade = 0;
let quantidadeAlunos = 0;

let idade = prompt("Digite a idade do aluno(para sair, digite 999)");
while (idade != 999) {
  quantidadeAlunos += 1;
  somarIdade += 1;
  idade = prompt("Digite a idade do aluno(para sair, digite 999:");
}

let mediaIdade;
if (quantidadeAlunos > 0) {
  mediaIdade = somarIdade / quantidadeAlunos;
  console.log("Quantidade de alunos na turma: " + quantidadeAlunos)
  console.log("Média idade de alunos na turma: " + mediaIdade)

} else{
    console.log("Errrrroooooooooorrrrrrrrrr")
}
