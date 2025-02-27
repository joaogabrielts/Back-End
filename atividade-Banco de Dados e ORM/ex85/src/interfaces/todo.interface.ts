

export interface ITodo {
    id:number;
    name:string;
    age:number;
}

export type TCreateTodo = Omit<ITodo, "id">