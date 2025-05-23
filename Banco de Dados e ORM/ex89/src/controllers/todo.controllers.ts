import { Request, Response } from "express";
import { ITodo } from "../interfaces/todo.interfaces";
import { TodoServices } from "../services/todo.services";

export class TodoControllers{
    getMany(req: Request, res: Response): Response<ITodo[]>{
        const todoServices = new TodoServices();

        const response = todoServices.getMany();

        return res.status(200).json(response);
    }
    
    create(req: Request, res: Response): Response<ITodo>{
        const todoServices = new TodoServices();

        const response = todoServices.create(req.body);

        return res.status(201).json(response);
    }

    update(req: Request, res: Response): Response<ITodo>{
        const id = req.params.id;

        const todoServices = new TodoServices();

        const response = todoServices.update(req.body, Number(id));

        return res.status(200).json(response);
    }

    delete(req: Request, res: Response): Response<void>{
        const id = req.params.id;

        const todoServices = new TodoServices();

        const response = todoServices.delete(Number(id));

        return res.status(204).json(response);
    }
}