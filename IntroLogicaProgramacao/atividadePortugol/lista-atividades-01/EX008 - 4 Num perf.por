programa {
	funcao inicio() {
		inteiro numero = 1, contagem = 0, teste, vetor[4]
		para(inteiro j=0;j<4;j++){
		    enquanto(contagem != numero){
		        contagem = 0
		        numero = numero +1
		        para(inteiro i=1;i<numero;i++){
		            teste=numero%i
		            se(teste == 0){
		                contagem = contagem + i
		            }
		        }
		       
		    }
		    vetor[j] = numero
		    numero++
		    
		}
		para(inteiro i =0; i < 4; i++){
	       escreva("\n vetor["+i+"]: "+vetor[i])
	    }
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 426; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */