import { generateId, todoDatabase } from "../database/database";
import { ITodo, TCreateTodoBody } from "../interfaces/todo.interface";


export class TODOservices{
    getMany(){
        return todoDatabase
    }

    create(body:TCreateTodoBody):ITodo{
         const newTodo = {id:generateId(), ...body}
         todoDatabase.push(newTodo);
         return newTodo
    }
}
