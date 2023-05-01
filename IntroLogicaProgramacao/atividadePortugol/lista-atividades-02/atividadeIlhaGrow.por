programa
{
    
    funcao inicio()
    {
        inteiro n50=0 , n10=0 , n5=0 , n1=0
        inteiro saque

        escreva("Digite o valor que deseja sacar: GC$ ")
        leia(saque)


        
            enquanto(saque>=50){
                saque-=50
                n50++                
            }
                
            enquanto(saque>=10){
                    saque-=10
                    n10++
            }
            
            enquanto(saque>=5){
                    saque-=5
                    n5++
            }
            
            enquanto(saque!= 0){
                    saque-=1
                    n1++
            }
        

        escreva("GC$ 50 --> " + n50 + "\n")
        escreva("GC$ 10 --> " + n10 + "\n")
        escreva("GC$ 5 --> " + n5 + "\n")
        escreva("GC$ 1 --> " + n1 + "\n")
    }
        
    
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 615; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */