programa
{
	
	funcao inicio()
	{
		//sistema de login e senha
		//entra no sistema, senao - apresenta dados errados

		//BANCO DE DADOS
		cadeia login_bd = "brasil"
		cadeia senha_bd = "senha"

		//FRONTEND
		cadeia login, senha
		escreva("Digite seu login: ")
		leia(login)
		escreva("Digite seu login: ")
		leia(senha)

		//BACKEND
		se(login == login_bd e senha == senha_bd){
			escreva("Login efetuado com sucesso")
		}senao{
			escreva("Login ou senha incorretos")
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 352; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */