let contador = 10;
let somaValor = 0;

do {
  somaValor += contador;
  contador++;
  console.log(somaValor);
} while (contador <= 100);
document.write(
  "A soma de todos os números entre 10 e 100 resulta em: " + somaValor + "."
);
