//types - uma instância de tipo que aceita qualquer tipagem existente

// type Product = string

//type Product = string | number

type Age = number;
const age: Age = 30;
console.log(age);


type Person = {
  name: string;
  age: Age;
};

const person: Person = {
  name: "Alice",
  age: 30,
};

type MathOperation = (x: number, y: number) => number;

const add: MathOperation = (a, b) => a + b;
console.log(add(1,2));


type Status = "pending" | "completed";

const updateStatus = (status: Status) => {
  // implementação da função
  console.log(status);
  
}
updateStatus("completed")

/*
interface IProduct {
  id: number;
  name: string;
  price: number;
  categories: string[];
}

type Product = IProduct | null;

type Modules = "M1" | "M2" | "M3";

const courseModule : Modules = "M1"
*/
