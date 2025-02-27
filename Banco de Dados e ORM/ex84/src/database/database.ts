import { ITodo } from "../interfaces/todo.interface";

export let todoDatabase: ITodo[] = [];
console.log(todoDatabase);


export const resetDataBase = () => {
  todoDatabase = [];
};

let id = 0;
export const generateId = () => {
  id++;
  return id;
};
