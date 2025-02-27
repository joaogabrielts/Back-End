import { ITodo } from "../interfaces/todo.interface";


export let todoBanco: ITodo[] = []

let id = 0


export const zeraBanco = () => {
    todoBanco = []
}

 export const generaId = () => {
    id++

    return id
}