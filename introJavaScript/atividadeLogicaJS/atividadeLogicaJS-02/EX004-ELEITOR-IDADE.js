
let anoNascimento
let anoAtual = new Date().getFullYear();
let resultIdade

do{
    anoNascimento = Number(prompt('Digite o ano em que nasceu:'))
}while(isNaN(anoNascimento))
    
resultIdade = anoAtual - anoNascimento

if(resultIdade < 16){
    alert("Usuário possui "+resultIdade+" anos e não pode votar!")
}else if(resultIdade >= 16 && resultIdade < 18 || resultIdade > 65){
    alert("Usuário possui "+resultIdade+" anos.")
    alert("Categoria: Eleitor com voto facultativo!")
}
else{
    alert("Usuário possui "+resultIdade+" anos.")
    alert("Categoria: Eleitor com voto obrigatório!")
}
