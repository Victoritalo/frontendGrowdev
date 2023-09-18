//EX001
/*
function average(a: number,b: number): { average: number; isApproved: boolean } {
  const result = (a + b) / 2;
  const isApproved = result >= 6;
  return { average: result, isApproved };
}
const result = average(8, 7);
console.log(result);

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

//EX005
/*
import { User } from "./TypesProject/types";
const userOne: User = {
  name: "Victor",
  age: 28,
  occupation: "Mid Level Back-End Developer",
  salary: 5800.0,
};
const userTwo: User = {
  name: "Samuel",
  age: 22,
  occupation: "Mid Level Front-End Developer",
  salary: 5800.0,
};
const userThree: User = {
  name: "Juca",
  age: 19,
  occupation: "Jr Back-End Developer",
};

function showAllEmployee(user: User): string {
  const ifHasSalary = user.salary ? `R$ ${user.salary}` : "N/A";
  return `Name: ${user.name} \nAge: ${user.age} \nOccupation: ${user.occupation} \nSalary: ${ifHasSalary}`;
}
console.log(showAllEmployee(userOne));
console.log("--------------------");
console.log(showAllEmployee(userTwo));
console.log("--------------------");
console.log(showAllEmployee(userThree));
*/

//EX006
/*
import { Executive } from "./TypesProject/types";
const executiveOne: Executive = {
  name: "Executive Daphne",
  age: 22,
  occupation: "Executive",
  commission: "Commission Level: " + 5,
  salary: 4800.0,
};

const executiveTwo: Executive = {
  name: "Executive Daphne",
  age: 22,
  occupation: "Executive",
  commission: "Commission Level: " + 5,
};

function showExecutives(executive: Executive): string {
  const ifHasSalary = executive.salary ? `R$ ${executive.salary}` : "N/A";
  return `Name: ${executive.name} \nAge: ${executive.age} \nOccupation: ${executive.occupation} \nSalary: ${ifHasSalary}`;
}
console.log(showExecutives(executiveOne));
console.log("----------------------");
console.log(showExecutives(executiveTwo));
*/

//EX007
/*
import { MixedEmployeeList } from "./TypesProject/types";
const employeeArray: MixedEmployeeList[] = [];
function addEmployee(): void {
  const executiveOne: MixedEmployeeList = {
    name: "Executive Daphne",
    age: 22,
    occupation: "Executive",
    commission: "Commission Level: " + 5,
    salary: 4800.0,
  };
  const userOne: MixedEmployeeList = {
    name: "Victor",
    age: 28,
    occupation: "Developer",
    salary: 5800.0,
  };
  employeeArray.push(executiveOne, userOne);
}
function findExecutiveOrUser(e: string) {
  addEmployee();
  const filterByOccupation = employeeArray.filter((employee) => {
    return e === employee.occupation;
  });
  return filterByOccupation;
}
console.log(findExecutiveOrUser("Executive"));
*/
