// Escreva um algoritmo que armazene o número total de eleitores de
// um município, o número de votos brancos, nulos e válidos. Calcular
// e escrever o percentual que cada um representa em relação ao
// total de eleitores. O algoritmo deve fazer uma validação para que as
// porcentagens dos votos armazenados (brancos, nulos e válidos)
// respeitem o limite do número total de eleitores, ou seja, garantir que
// a soma dos votos brancos, nulos e válidos não seja maior que o
// número total de eleitores.

let totalEleitores = Number(prompt('Total de eleitores da cidade:'));
let votoValido = Number(prompt('Total de votos Validos:'));
let votoBranco;
let votoNulo;

let calcBranco;
let calcValido;
let calcNulo;

if (votoValido > totalEleitores){
    alert('Você digitou quantidades maiores que a quantidade de eleitores!');
}else if(votoValido === totalEleitores){
    calcValido = ((100*votoValido)/totalEleitores);
    document.write(`Numero total de eleitores: ${totalEleitores} <br>`)
    document.write(`Porcentagem de votos Validos: ${calcValido}% <br>`)
    document.write(`Votos em Branco: 0 <br>`)
    document.write(`Votos Nulos: 0 <br>`)
}
else if(votoValido < totalEleitores){
    alert(`Possuem ${totalEleitores-votoValido} votos disponíveis`)
    votoBranco = Number(prompt('Votos em Brancos:'));
    if(votoBranco+votoValido > totalEleitores){
        alert(`Você ultrapassou a porra a quantidade de eleitores!`)
    }
    else{
        calcValido = ((100*votoValido)/totalEleitores);
        calcBranco = ((100*votoBranco)/totalEleitores);

        votoNulo = ((votoValido+votoBranco) - totalEleitores);
        calcNulo = ((100*votoNulo)/totalEleitores);

        document.write(`Numero total de eleitores: ${totalEleitores} <br>`)
        document.write(`Porcentagem de votos em Branco: ${calcBranco}% <br>`)
        document.write(`Porcentagem de votos Nulos: ${Math.abs(calcNulo)}% <br>`)
        document.write(`Porcentagem de votos Validos: ${calcValido}% <br>`)

    }

}