//EX001
/*
import { Contador } from "./Classes/ClassContador"
const contador = new Contador()
contador.incrementar()
contador.incrementar()
contador.incrementar()
contador.incrementar()
console.log(contador.retornarValor())
contador.zerar()
console.log(contador.retornarValor())
*/

//EX002
/*
import { Bola } from "./Classes/ClassMoldBola"
const bolinha = new Bola("Preta", 100, "Polietileno")
console.log(bolinha)
bolinha.trocarCor("Rosa")
console.log(bolinha.cor)
*/

//EX003
/*
import { Cliente } from "./Classes/ClienteBanco"
const cliente = new Cliente(304050, "Serjão", 11000)
console.log(cliente)
cliente.nome = "Bruna Johnny Depp"
cliente.depositar(500)
console.log(cliente)
cliente.sacar(500)
console.log(cliente)
*/

//EX004
/*
import { Calculadora  } from "./Classes/Calculadora";
const calc = new Calculadora()

calc.multi(5,5)
calc.somar(5,5)
calc.dividir(5,100)
calc.subtrair(5,50)
console.log(calc.funcHistorico())
*/

//EX005
/*
import { BombaCombustivel } from "./Classes/BombaCombustivel";
const newBomba = new BombaCombustivel("Gasolina", 5.99, 500);
console.log(newBomba.abastecerPorValor(5.99))
console.log(newBomba.abastecerPorLitro(1));
console.log(newBomba.quantidadeCombustivel);
console.log(newBomba.alterarQuantidadeCombustivel(500))
console.log(newBomba.quantidadeCombustivel);
console.log(newBomba);
newBomba.alterarValor(4.5);
newBomba.alterarCombustivel("Etanol");
console.log(newBomba);
*/

//EX006

import { Carro } from "./Classes/ClasseCarro";
const hb20 = new Carro(10)
console.log(`Nivel de combustivel atual: ${hb20.obterNiveCombustivel()}`)
console.log(`Abastecer: ${hb20.abastecer(20)}`)
console.log(`Nivel de combustivel atual: ${hb20.obterNiveCombustivel()}`)
console.log(`Andou e consumiu: ${hb20.andar(60)} litros`)
console.log(`Nivel de combustivel atual: ${hb20.obterNiveCombustivel()}`)
console.log(hb20)