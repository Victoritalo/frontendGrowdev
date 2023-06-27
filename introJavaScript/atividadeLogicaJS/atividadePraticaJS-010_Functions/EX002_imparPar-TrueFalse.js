/*
Crie uma função que recebe um valor inteiro e retorne verdadeiro se
for ímpar ou falso se for par.
*/

function imparPar(inteiro){
    if(inteiro % 2 != 0) {
        return true
    } else {
        return false
    }
}

console.log(imparPar(3))