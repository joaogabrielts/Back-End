//Herança em interfaces

interface IAnimal {
  name: string;
  type: string;
}

interface IBird extends IAnimal {
  wings: number;
}

//Herança em tipos

type TBird = IAnimal & {
  wings: number;
};

//const object: TBird = {};

type TPerson = {
  name: string;
  age: number;
};

type TEemployee = {
  job: string;
  budget: number;
};

type TWorker = TPerson & TEemployee;

//const person: TWorker ={

//}
