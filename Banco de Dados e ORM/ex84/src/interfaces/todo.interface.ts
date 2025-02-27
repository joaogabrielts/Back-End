

export interface ITodo {
    id:Number;
    name:string;
    age:number
}

export  type TCreateTodoBody = Omit<ITodo,"id">