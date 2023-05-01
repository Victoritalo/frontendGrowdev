programa
{	/*
	Crie uma função que recebe um valor inteiro e retorne verdadeiro se
	é um valor perfeito ou falso se não for. Um valor é dito perfeito
	quando ele é igual a soma dos seus divisores excetuando ele
	próprio.

	*/
	inteiro x, valor = 1, divisores = 0
	funcao inicio()
	{
		numPerf()
		
	}

	funcao numPerf(){
		faca{
			escreva("Digite um valor maior que 0: ")
			leia(x)
		}enquanto(x < 2)
		
		enquanto(valor < x ){
			se(x % valor == 0){
				escreva(valor+", ")
				divisores += valor
			}valor++
		}
		escreva("\n\n")
		se(divisores == x){
			escreva("O número " +x+ " é um  número perfeito")
		}
		senao{
			escreva("O número " +x+ " não é um número perfeito")
		}
		escreva("\n")
	}
	
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 695; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */