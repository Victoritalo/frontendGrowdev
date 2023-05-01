programa
{	/*
	Crie uma função que recebe 2 vetores de 10 elementos inteiros e que
	retorne a união dos dois em um novo vetor.
	*/
	inclua biblioteca Util --> u
	inteiro vet1[10], vet2[10], vet3[10]
	
	funcao inicio()
	{
		vetorRecebe()
		escreva("Tarefa dificil")
	}
	

	funcao vetorRecebe(){
		
	para(inteiro i = 0; i < u.numero_elementos(vet1); i++){
		escreva("Digite o ",i+1, "° valor do vetor 1: ")
		leia(vet1[i])
		limpa()
	}
	para(inteiro i = 0; i < u.numero_elementos(vet2); i++){
		escreva("Digite o ",i+1, "° valor do vetor 2: ")
		leia(vet2[i])
		vet3[i] = vet1[i] + vet2[i]
		limpa()
	}
	para(inteiro x = 0; x < u.numero_elementos(vet3); x++){
		escreva("Indice: ",x+0,+": "+ vet3[x]+"\n")
	}	 
	
	
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 296; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {vet3, 7, 29, 4};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */