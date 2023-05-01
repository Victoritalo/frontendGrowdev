programa
{
	inclua biblioteca Util --> u
	
	
	funcao inicio()
	{
		//DESAFIO CRUD DE GROWDEVERS
		//Menu: Cadastrar(1), Listar(2), Deletar(3) e Atualizar(4), Finalizar(0)

		cadeia bd_growdevers[10]
		cadeia nome //input
		inteiro opcao, matricula	
		
		faca{
			escreva("SISTEMA CRUD DE GROWDEVERS\n")
			escreva("Escolha uma das opções: \n- Cadastrar (1)\n- Listar (2)\n- Deletar (3)\n- Atualizar (4)\n- Finalizar (0) ")
			leia(opcao)
			
			escolha(opcao){
				caso 1:
					escreva("CADASTRAR\n")
					escreva("Digite um nome: ")
					leia(nome)
					para (inteiro i = 0; i < u.numero_elementos(bd_growdevers); i++){
						se(bd_growdevers[i] == ""){
							bd_growdevers[i] = nome
							pare
						}
					}
					escreva("\n")
				pare
				caso 2:
					escreva("LISTAR\n")
					para (inteiro i = 0; i < u.numero_elementos(bd_growdevers); i++){
					escreva("Matrícula: " + i + " - Nome: " + bd_growdevers[i] + "\n")
					}
					escreva("\n")				
				pare
				caso 3:
					escreva("DELETAR\n")
					escreva("Digite a matricula do Growdever ")
					leia(matricula)
					bd_growdevers[matricula] = ""		
					escreva("Nome deletado.")
					escreva("\n")
				pare
				caso 4:
					escreva("ATUALIZAR\n")
					escreva("Digite a matricula do Growdever ")
					leia(matricula)
					se(matricula < u.numero_elementos(bd_growdevers)){
						escreva("Digite o nome do Growdever atualizado: ")
						leia(nome)
						bd_growdevers[matricula] = nome
						escreva("Nome atualizado. Matrícula " + matricula + " - " + bd_growdevers[matricula])
					}
					escreva("\n")
				pare
				caso 0:
					escreva("SISTEMA FINALIZADO")
				pare
				caso contrario:
					escreva("Opção inválida")
			}
			}enquanto(opcao != 0)		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 800; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */