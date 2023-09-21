export class Cliente {
  conta: number;
  nome: string;
  saldo: number;

  constructor(conta: number, nome: string, saldo?: number) {
    this.conta = conta;
    this.nome = nome;
    this.saldo = saldo || 0;
  }

  trocarNome(novoNome: string) {
    this.nome = novoNome;
  }
  depositar(deposito: number) {
    this.saldo += deposito;
  }
  sacar(ValorSaque: number) {
    this.saldo -= ValorSaque;
  }
}
