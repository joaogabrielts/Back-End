import { generaId, todoBanco } from "../database/database.todo";
import { ITodo, TCreateTodo } from "../interfaces/todo.interface";

export class TODOservices {
  lerBanco() {
   return  todoBanco;
  }

  create(body: TCreateTodo):ITodo{
    const newTodo = { id: generaId(), ...body };
    todoBanco.push(newTodo);
    return newTodo;
  }
}
