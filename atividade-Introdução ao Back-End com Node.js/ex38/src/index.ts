import express, { json, Request, Response } from "express";

const app = express();

app.use(json());

app.get("/", (req: Request, res: Response) => {
  res.send("leirura de jogo realizada com sucesso!");
});

app.post("/", (req: Request, res: Response) => {
  res.send("Criação de jogo  realizada com sucesso!");
});

app.put("/", (req: Request, res: Response) => {
  res.send("Atualização de jogo realizada com sucesso!");
});

app.delete("/", (req: Request, res: Response) => {
  res.send("Exclusão de jogo realizada com sucesso!");
});

const port = 4000;

app.listen(port, () => {
  console.log(`API sucessfully started on port ${port}`);
});
