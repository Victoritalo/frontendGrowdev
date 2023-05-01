programa
{	/*
	Crie uma função que recebe por parâmetro o tempo de duração de
	uma fábrica expressa em segundos e retorna esse tempo em horas,
	minutos e segundos.
	*/

	inteiro segundos
	funcao inicio()
	{
		escreva("Digite os segundos: ")
		leia(segundos)
		horasMinSeg(segundos)
		
	}

	funcao horasMinSeg(inteiro segundo){
		inteiro horas = segundo/3600
		inteiro minutos = (segundo % 3600) / 60
		inteiro segundos = (segundo % 3600) % 60
		escreva(horas+":"+minutos+":"+segundos)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 447; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */