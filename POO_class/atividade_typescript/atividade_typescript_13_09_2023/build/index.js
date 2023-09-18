"use strict";
//EX001
/*
function average(a: number,b: number): { average: number; isApproved: boolean } {
  const result = (a + b) / 2;
  const isApproved = result >= 6;
  return { average: result, isApproved };
}
const result = average(8, 7);
console.log(result);

001
function calculandoMedia(num1: number, num2: number) {
    const media = (num1 + num2) / 2;
    const aprovado = media >= 6;

    const resultado = {
      media,
      aprovado,
    };

    return resultado;
}
*/
//EX002
/*
import { AverageWeighted } from "./typesProject/types"
function runAverage(avrrgWeighted: AverageWeighted[]): number {
  let sumNumbers = 0;
  let sumWeighted = 0;

  for (let i: number = 0; i < avrrgWeighted.length; i++) {
    const num = avrrgWeighted[i].averageNumbers;
    const weight = avrrgWeighted[i].weighted;
    sumNumbers += num * weight;
    sumWeighted += weight;
  }
  const weightedAverage = sumNumbers / sumWeighted;
  return weightedAverage;
}
const numList: AverageWeighted[] = [
  { averageNumbers: 18, weighted: 2 },
  { averageNumbers: 19, weighted: 3 },
];
const result: number = runAverage(numList);
console.log(`The weighted average is: ${result}`);
*/
//EX003
/*
import { Wallet } from "./classes/bankClient";
const victorItalo = new Wallet("Victor", 15000)
console.log(victorItalo)
console.log(victorItalo.deposit(5000))
console.log(victorItalo.withdraw(6000))
*/
//EX004
/*
import { ProductManager } from "./classes/productCrud";
const manager = new ProductManager();
manager.register({ id: 0, name: "Banana", price: 8.99 })
manager.register({ id: 0, name: "Orange", price: 5.99 })
manager.register({ id: 0, name: "Grapes", price: 4.99 })

console.log(manager.listAllProduct())
console.log(manager.deleteProduct(1))
console.log(manager.listAllProduct())
*/ 
