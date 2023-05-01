	/*
	Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
	e que exiba a lista desses nomes na tela. Após exibir essa lista, o
	programa deve mostrar também os nomes na ordem inversa em
	que o usuário os digitou.
 	*/
programa
{

	inclua biblioteca Util--> u
	
	funcao inicio()
	
	{	
		cadeia nomeLista[6]	
			
		para(inteiro index = 1; index < u.numero_elementos(nomeLista); index++){
			escreva("Digite os nomes: ")
			leia(nomeLista[index])
		}
		
		limpa()
		escreva("Carregando sistema, aguarde ")escreva(". ") u.aguarde(900) escreva(" . ") u.aguarde(900) escreva(" . ") u.aguarde(900) escreva(" . ") u.aguarde(900) escreva(" .\n")			

		escreva("\nImprimindo \n")u.aguarde(500)
		
		para(inteiro index = 1; index < u.numero_elementos(nomeLista); index++){		
			escreva("N° " +index+ ": " +nomeLista[index]+ "\n")
			u.aguarde(500)u.aguarde(500)
		}

		escreva("\nInvertendo \n")
		para(inteiro index = 5; index >= 1; index--){		
			escreva("N° " +index+ ": " +nomeLista[index]+ "\n")
			u.aguarde(500)u.aguarde(500)
		}
			
	}

	
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 504; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */