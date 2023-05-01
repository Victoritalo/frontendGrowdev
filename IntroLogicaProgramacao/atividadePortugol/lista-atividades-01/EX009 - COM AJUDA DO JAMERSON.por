programa
{	/*
	Crie uma função que recebe 2 vetores de 10 elementos inteiros e que
	retorne a união dos dois em um novo vetor.
	*/
	inclua biblioteca Util --> u
	inteiro vet1[10] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}, vet2[10] = {10, 11, 12, 13, 14, 15, 16, 17, 18, 19}, vet3[20]
	
	funcao inicio()
	{
		vetorRecebe(vet1, vet2)
		escreva(" " +vet3[19])
		
	}
	

	funcao  vetorRecebe(inteiro vetor1[], inteiro vetor2[]){
		
	para(inteiro i = 0; i < u.numero_elementos(vetor1); i++){
		vet3[i] = vetor1[i]
		escreva(" "+vet3[i])
	}
	para(inteiro i = 0; i < u.numero_elementos(vet2); i++){
		vet3[i+10] = vet2[i]
		escreva(" "+vet3[i+10])
		
	}
		
	
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 322; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */