programa
{
	
	funcao inicio()
	{
		//RESTAURANTE
		inteiro opcao
		escreva("Restaurante do Oxe\n")
		escreva("1 - Cuzcuz, 2 - Cafe, 3 - Baiao de dois, 4 - Vatapa\n")
		escreva("Digite uma  das opções: ")
		leia(opcao)
		escolha(opcao){//ler a expressao
			caso 1:
				//instrucao
				escreva("Opção selecionada foi o Cuzcuz")
			pare

			caso 2:
				//instrucao
				escreva("Opção selecionada foi o Cafe")
			pare

			caso 3:
				//instrucao
				escreva("Opção selecionada foi Baiao de dois")
			pare

			caso 4:
				//instrucao
				escreva("Opção selecionada foi o Vatapa")
			pare

			caso contrario:
			limpa()
			escreva("Digite o numero correspondente ao prato desejado")
			inicio()
			pare
			
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 339; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */