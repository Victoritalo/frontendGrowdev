// 4. Crie uma classe para representar uma Calculadora. Esta classe
// deve conter um atributo que servirá para armazenar o histórico das
// operações e seus respectivos resultados.
// a. Esta classe deve conter as operações de somar, multiplicar,
// dividir e diminuir.
// b. Esta classe deve iniciar com o histórico vazio
// c. Esta classe deve conter uma ação para visualizar o histórico.

export class Calculadora {
  historico: string[] = [];

  armazenarHistorico(op: string, resultado: number) {
    this.historico.push(`${op}: ${resultado}`);
  }

  somar(a: number, b: number): number {
    const resultado = a + b;
    this.armazenarHistorico(`O resultado de: ${a} + ${b} é:`, resultado);
    return resultado;
  }

  multi(a: number, b: number): number {
    const resultado = a * b;
    this.armazenarHistorico(`O resultado de: ${a} * ${b} é:`, resultado);
    return resultado;
  }

  dividir(a: number, b: number): number {
    const resultado = a / b;
    this.armazenarHistorico(`O resultado de: ${a} / ${b} é:`, resultado);
    return resultado;
  }

  subtrair(a: number, b: number): number {
    const resultado = a - b;
    this.armazenarHistorico(`O resultado de: ${a} - ${b} é:`, resultado);
    return resultado;
  }

  funcHistorico() {
    for (const x of this.historico) {
      console.log(x);
    }
  }
  //     funcHistorico(): any {
  //       for (const x of this.historico) {
  //          return x
  //       }
  //    }
}
