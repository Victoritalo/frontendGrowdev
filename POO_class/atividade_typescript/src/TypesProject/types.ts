export interface AverageWeighted {
  averageNumbers: number;
  weighted: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
}

 export type User = {
  name: string;
  age: number;
  occupation: string;
  salary?: number;

}

export type Executive = {
    name: string;
    age: number;
    occupation: string
    commission: string | number
    salary?: number;
  }
  
  export type MixedEmployeeList = {
    name: string;
    age: number;
    occupation: string
    commission?: string | number
    salary?: number;
  }
  