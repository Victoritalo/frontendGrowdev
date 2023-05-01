programa
{	inclua biblioteca Util--> u
	real saldo = 0.0, taxaSaque = 2.5, taxaTransfer = 4.50
	logico taRodando=verdadeiro
	
	funcao inicio()
	{
		caracter opcao

		limpa()
			// 1 - looping
		enquanto(taRodando){
			
			mostrarMenu()
			escreva("\n Digite a opção desejada: ")
			leia(opcao)
			//no JS chamamos de switch case

			escolha(opcao){
				 caso '1':
					mostrarSaldo()
				 pare
				 caso '2':
					//regra de negocio
					depositar()
				 pare

				 caso '3':
					//regra de negocio
					sacar()
				 pare

				 caso '4':
					//regra de negocio
					transferir()
				 pare

				 caso '5':
					//regra de negocio
					escreva(" Saindo do sistema")
					escreva(".")
					u.aguarde(100)
					escreva(".")
					u.aguarde(100)
					escreva(".")
					u.aguarde(100)
					escreva(".")
					u.aguarde(100)
					escreva(".\n")
					u.aguarde(100)
					taRodando=falso
				 pare
				 caso contrario:
					//regra de negocio
					escreva(" Reiniciando sistema")
					escreva(".")
					u.aguarde(100)
					escreva(".")
					u.aguarde(100)
					escreva(".")
					u.aguarde(100)
					escreva(".")
					u.aguarde(100)
					escreva(".\n")
					u.aguarde(100)
					inicio()
				 pare
			}
			
		}
	}

	funcao mostrarMenu(){
		escreva("\n\nDigite o número referente a uma das opções abaixo: \n")
		escreva("1 - Visualizar Saldo em conta\n")
		escreva("2 - Depositar Growcoins\n")
		escreva("3 - Sacar Growcoins\n")
		escreva("4 - Transferir Growcoins\n")
		escreva("5 - Sair do sistema\n")
	}

	funcao mostrarSaldo(){
		escreva("\n Seu saldo disponível é: " +saldo+ "\n")
	}

	funcao depositar(){
		limpa()
		real valor
		escreva("\n Digite o valor a depositar: G$")
		leia (valor)

		saldo += valor //saldo que vai receber SALDO + VALOR

		escreva("O deposito de " +valor+ " foi efetuado com sucesso!\n")
		mostrarSaldo()
	}

	funcao sacar(){
		limpa()
		real valor, saqueTemp
		escreva("\n Digite o valor a sacar: G$")
		leia(valor)

		saqueTemp = saldo-valor-taxaSaque // saldo - 
		se(saqueTemp < -500) {
			escreva("Não tem\n")
		}senao{
			saldo = saqueTemp
			escreva("O saque de " +valor+ " foi efetuado com sucesso!\n")
			mostrarSaldo()
		}
	}

	funcao transferir(){
		limpa()
		real valor, saldoTemp
		cadeia nomeFavorecido, numConta
		escreva("\n Digite o n° da conta para transferência: G$")
		leia(numConta)

		escreva("\n Digite o nome do favorecido: G$")
		leia(nomeFavorecido)

		escreva("\n Digite o valor da transferência: G$")
		leia(valor)

		saldoTemp = saldo-valor-taxaTransfer

		se(saldoTemp < 0 ){
			escreva("Saldo insuficiente")
		}senao{
			saldo = saldoTemp
			escreva(" O valor de " +valor+ " foi transferido com sucesso para a conta n° " +numConta+ ", favorecido: " +nomeFavorecido)
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1248; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */