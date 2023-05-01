programa
{	/*
	Crie uma função que recebe por parâmetro um valor inteiro e
	positivo e retorne verdadeiro se o número for primo ou falso se não
	for.
	*/
	inteiro valor
	
	funcao inicio()
	{
		escreva("Digite um valor: ")
		leia(valor)

		se(esPrimo(valor)){
			escreva("Primo é meu parente")
		}senao{
			escreva("Não é meu primo")
		}
		
	}

	
	funcao logico esPrimo(inteiro val){
		inteiro divisores = 0

		para(inteiro i = 1; i <= val; i++){
		se(val % i == 0){
			divisores++
			}
		}
		se(divisores == 2){
			retorne verdadeiro
		}senao{
			retorne falso
		}
	}



	
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 329; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */