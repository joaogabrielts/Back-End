// products.routes.ts

import { Request, Response, Router } from "express";

export const productsRouter = Router();

productsRouter.get("/", (req: Request, res: Response) => {    
   res.send("Leitura realizada com sucesso!");
})

productsRouter.post("/", (req: Request, res: Response) => {
    res.status(201).json({ message: "Criação realizada com sucesso!"});
})

productsRouter.put("/", (req: Request, res: Response) => {
    res.send("Atualização realizada com sucesso!")
})

productsRouter.delete("/", (req: Request, res: Response) => {
    res.send("Exclusão realizada com sucesso!")
})