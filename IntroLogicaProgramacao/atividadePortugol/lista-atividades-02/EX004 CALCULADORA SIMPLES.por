programa {
    funcao inicio() {
        real x
        real y
        caracter operador


        escreva ("Digite o primeiro número: ")
        leia (x)

        escreva ("Digite a operação: ")
        leia (operador)

        escreva ("Digite o segundo número: ")
        leia (y)

        se (operador == '+'){

            real result = x + y
            se(result >= 0){
                escreva("O resultado é: ", result, ", e o valor é positivo")
            } senao {
                escreva("O resultado é: ", result, ", e o valor é negativo.")
            }

        } senao se(operador == '-') {

            real result = x - y
            se(result >= 0){
                escreva("O resultado é: ", result, ", e o valor é positivo")
            } senao {
                escreva("O resultado é: ", result, ", e o valor é negativo.")
            }

        } senao se(operador == '/') {

            real result = x / y
            se(result >= 0){
                escreva("O resultado é: ", result, ", e o valor é positivo")
            } senao {
                escreva("O resultado é: ", result, ", e o valor é negativo.")
            }

        }  senao se(operador == '*') {

            real result = x * y
            se(result >= 0){
                escreva("O resultado é: ", result, ", e o valor é positivo")
            } senao {
                escreva("O resultado é: ", result, ", e o valor é negativo.")
            }

        } senao{
            limpa()
            escreva("O operador não é válido! \n")
            inicio ()
        }

    }
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 860; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */