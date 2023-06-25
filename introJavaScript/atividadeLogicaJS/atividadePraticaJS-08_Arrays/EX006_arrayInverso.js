// Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
// e que exiba a lista desses nomes na tela. Após exibir essa lista, o
// programa deve mostrar também os nomes na ordem inversa em
// que o usuário os digitou.
console.log("----------Reverso Nomes Array----------");
let arrayNomes = ["Jay-Z", "Eminem", "Chris Brown", "50 Cent", "Sabotagem"];

for(let i = 0; i < arrayNomes.length; i++) {
    console.log(arrayNomes[i])
}
console.log("-- reverse --")
for(let i = arrayNomes.length - 1; i >= 0; i--) {
    console.log(arrayNomes[i])
}