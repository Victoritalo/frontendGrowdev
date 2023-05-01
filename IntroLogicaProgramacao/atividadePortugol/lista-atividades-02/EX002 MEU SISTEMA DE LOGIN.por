programa
{
	
	funcao inicio()
	{
		cadeia userName = "victorgrowdev"
		cadeia userPass = "password"

		cadeia user_name
		cadeia user_pass
		escreva("Digite seu usuário: ")
		leia(user_name)
		escreva("Digite sua senha:" )
		leia(user_pass)

		se(user_name == userName e user_pass == userPass){
			escreva("Login efetuado com sucesso")
		}senao{
			escreva("Login de usuário ou senha incorretos")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 399; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */