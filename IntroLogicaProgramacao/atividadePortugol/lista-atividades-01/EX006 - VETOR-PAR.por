programa
{	inclua biblioteca Util --> u
	inteiro numbers[15] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15}
	
	funcao inicio()
	{
		ehPar(numbers)
	}

	funcao ehPar(inteiro valor[]){
		para(inteiro i = 0; i < u.numero_elementos(valor); i++){
			se(valor[i] % 2 == 0){
				escreva(valor[i] + " Par"+ "\n")
			}
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 300; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */