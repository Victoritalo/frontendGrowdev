programa
{	/*Crie uma função que recebe 3 notas de um aluno por parâmetro e
	uma letra. Se a letra for A a função deve calcular a média aritmética,
	se for P, a média ponderada (peso: 5, 3 e 2). 
	*/
	inclua biblioteca Util--> u
	inclua biblioteca Matematica--> mat
	funcao inicio()
	{
		real nota[4], mediaA
		inteiro opcao
		
		
		faca{
		
		escreva("\nSelecione a opção desejada\n")
		escreva("(1) - Aritmética \n")
		escreva("(2) - Ponderada \n")
		escreva("(0) - Sair do programa \n")
		leia(opcao)
		limpa()
		
			escolha(opcao){
			
			caso 1:
				para(inteiro i = 1; i < u.numero_elementos(nota); i++){
					escreva("Digite a nota " +i+ ": ")
					leia(nota[i])
				}
					mediaA = mat.arredondar((nota[1]+nota[2]+nota[3]) / 3, 2)
					limpa()
					escreva("\nMedia final é: " +mediaA+ "\n")
					escreva("-------------------")
			pare
			
			caso 2:
				para(inteiro i = 1; i < u.numero_elementos(nota); i++){
					escreva("Digite a nota " +i+ ": ")
					leia(nota[i])
				}
					mediaA = mat.arredondar(((nota[1]*5)+(nota[2]*3)+(nota[3]*2)) / 10, 2)
					limpa()
					escreva("\nMedia final é: " +mediaA+ "\n")
					escreva("-------------------")
			pare
			
			}
			
		}enquanto(opcao != 0)
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1164; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */