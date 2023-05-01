programa
{
	/*
	Crie uma função que recebe um valor inteiro e retorne verdadeiro se
	for ímpar ou falso se for par.
	*/
	
inteiro valor
	
	funcao inicio()
	{
		escreva("Digite um valor: ")
		leia(valor)
		se(ehImpar(valor)){
			escreva("Impar")
		}senao{
			escreva("Par")
		}
	}

	funcao logico ehImpar(inteiro valor) {
		retorne valor % 2 != 0
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 351; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */