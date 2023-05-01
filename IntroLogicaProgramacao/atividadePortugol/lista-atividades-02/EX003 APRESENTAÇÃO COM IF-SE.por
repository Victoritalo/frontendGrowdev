programa
{
	
	funcao inicio()
	{
		cadeia nomeCompleto = "Victor M"
		inteiro idade = 25
		real	altura = 1.72
		cadeia centi = "cm"//sistema metrico
		caracter letraOne = 'V'
		logico solteiro = verdadeiro //Se falso, irá printar o resultado Solteiro

		escreva("Nome: " + nomeCompleto + "\nIdade: " + idade + 
			"\nAltura: " + altura + centi + "\nPrimeira letra do nome: " + letraOne)

		se(solteiro == falso)
		{
			escreva("\nEstado civil: Namorando")
		}
		senao se(solteiro == verdadeiro)
		{
			escreva("\nEstado civil: Solteiro")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 459; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */