programa
{	/*
	Desenvolva um algoritmo para percorrer um vetor de 20 elementos
	inteiros e no final mostre a soma de todos os elementos.
	*/
	inclua biblioteca Util --> u
	inteiro vet[20] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20}
	funcao inicio()
	{
		somaVetor(vet)
	}

	funcao somaVetor (inteiro vet[]) {
		inteiro somaTemp = 0
		para(inteiro i = 0; i < u.numero_elementos(vet); i++){
			somaTemp+=vet[i]
		}
		escreva(somaTemp)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 302; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */