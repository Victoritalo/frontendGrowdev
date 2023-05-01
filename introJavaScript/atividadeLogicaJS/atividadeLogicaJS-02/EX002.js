let repetirOp = "s"

do{
    let numeroChecar = Number(prompt(`Digite um valor e lhe digo se for PAR ou IMPAR`))
    
    if(isNaN(numeroChecar)){
        alert(`Digite somente numeros, por favor!`)
    }else if(numeroChecar % 2 == 0){
        alert(`É PARRRRRRRRR`)
    }else if(numeroChecar % 2 != 0){
        alert(`É IMPARRRRRRRR`)
    }

    repetirOp = prompt(`Aperte S para sair do sistema ou QUALQUER tecla para REPETIR a operação:`)
}while(repetirOp != "s")