export class Carro {
  consumo: number;
  nivelCombustivel!: number;

  constructor(consumo: number){
    this.consumo = consumo
    this.nivelCombustivel = 0
  }
  andar(distanciaKm: number) {
      const consumo = distanciaKm / this.consumo
      this.nivelCombustivel -= consumo
      return consumo
    }
    obterNiveCombustivel() {
        return this.nivelCombustivel
    }
    abastecer(abastecer: number){
      return this.nivelCombustivel += abastecer
    }
}
