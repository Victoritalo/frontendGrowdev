
let numberOne = Number(prompt('Digite o valor A : '))
let numberTwo = Number(prompt('Digite o valor B : '))
let numberThree = Number(prompt('Digite o valor C : '))

if(numberOne === numberTwo){
    document.write('Você repetiu valores! Comece novamente!')
    setTimeout(function(){
        window.location.reload();
     }, 3000);
}else if(numberOne === numberThree){
    document.write('Você repetiu valores! Comece novamente!')
    setTimeout(function(){
        window.location.reload();
     }, 3000);
}else if(numberTwo === numberThree){
    document.write('Você repetiu valores! Comece novamente!')
    setTimeout(function(){
        window.location.reload();
     }, 3000);
}else if(numberOne === numberTwo === numberThree){
    document.write('Você repetiu valores! Comece novamente!')
    setTimeout(function(){
        window.location.reload();
     }, 3000);
}
else{
    let soma = numberOne + numberTwo + numberThree
    let media = soma / 3
    let produto = numberOne * numberTwo * numberThree

//Document HTML 
document.write(`A soma de ${numberOne} + ${numberTwo} + ${numberThree} é: `+soma+'<br>')
document.write(`A média de ${numberOne} + ${numberTwo} + ${numberThree} é: `+media+'<br>')
document.write(`O produto de ${numberOne} * ${numberTwo} * ${numberThree} é: `+produto+'<br>')
document.write('O maior valor digitado pelo usuário foi: '+(Math.max(numberOne, numberTwo, numberThree)+'<br>'))
document.write('O maior valor digitado pelo usuário foi: '+(Math.min(numberOne, numberTwo, numberThree)+'<br>'))

//Console
console.log(`A soma de ${numberOne} + ${numberTwo} + ${numberThree} é: `+soma)
console.log(`A média de ${numberOne} + ${numberTwo} + ${numberThree} é: `+media)
console.log(`O produto de ${numberOne} * ${numberTwo} * ${numberThree} é: `+produto)
console.log('O maior valor digitado pelo usuário foi: '+(Math.max(numberOne, numberTwo, numberThree)))
console.log('O maior valor digitado pelo usuário foi: '+(Math.min(numberOne, numberTwo, numberThree)))
}
















// if(numberOne === numberTwo){
//     window.alert(`Valor A: ${numberOne}`)
// }
// else {
//     window.alert(`TESTE DOIS NAO SAO IGUIS`)
// }