import { TODOservices } from "./services/todo.services";

function sum(a:number, b:number){
    return a + b;
}

const todoservices = new TODOservices();

const newTodo = todoservices.create({name:"gabriel", age:18})



export default sum