export class BombaCombustivel {
  tipoCombustivel: string;
  valorLitro: number;
  quantidadeCombustivel: number;

  constructor(
    tipoCombustivel: string,
    valorLitro: number,
    quantidadeCombustivel: number
  ) {
    this.tipoCombustivel = tipoCombustivel;
    this.valorLitro = valorLitro;
    this.quantidadeCombustivel = quantidadeCombustivel;
  }

  abastecerPorValor(valor: number) {
    const litrosAbastecidos = valor / this.valorLitro;
    if (litrosAbastecidos <= this.quantidadeCombustivel) {
      console.log(`Abasteceu: ${litrosAbastecidos} litros.`);
      this.quantidadeCombustivel -= litrosAbastecidos;
    } else {
      console.log(`Não há combustível suficiente`);
    }
  }

  abastecerPorLitro(litros: number) {
    const valorPago = this.valorLitro * litros;
    if (litros <= this.quantidadeCombustivel) {
      console.log(`Abasteceu: ${litros} litros. Pagou: ${valorPago}`);
      this.quantidadeCombustivel -= litros;
    } else {
      console.log(`Não há combustível suficiente`);
    }
  }
  alterarValor(novoValor: number) {
    this.valorLitro = novoValor;
  }
  alterarCombustivel(novoCombustivel: string) {
    this.tipoCombustivel = novoCombustivel;
  }
  alterarQuantidadeCombustivel(novaQuantidade: number) {
    this.quantidadeCombustivel = novaQuantidade;
  }
}
