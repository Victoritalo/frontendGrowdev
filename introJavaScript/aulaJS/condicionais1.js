//Atividade 6 - CONDICIONAIS (EXTRA)
const numTeste = Number (prompt('Digite um numero:'));
if(isNaN(numTeste)){
    document.write(String(numTeste) + ' não é um numero');
}else{
    const ehPar=numTeste%2;
    if(ehPar === 0){
        document.write(`é par!`);
    } else{
        document.write(`é impar`);
    }
    document.write(ehPar);
}