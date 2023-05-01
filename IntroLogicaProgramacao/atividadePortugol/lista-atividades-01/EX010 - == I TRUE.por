programa
{	/*
	Crie uma função que recebe um vetor de inteiros e um número
	inteiro e retorne verdadeiro se o número faz parte do vetor ou falso
	se não faz parte.
	*/

	inteiro contador
	inteiro vet[6] = {0, 1, 2, 3, 4, 5}
	funcao inicio()
	{
		vetorVerdade()
	}

	funcao vetorVerdade(){
		escreva("Digite: ")
		leia(contador)
		para(inteiro x = 0; x < 6; x++){
			se(contador == vet[x]){
				escreva("Indice verdadeiro")
			}
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 431; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */