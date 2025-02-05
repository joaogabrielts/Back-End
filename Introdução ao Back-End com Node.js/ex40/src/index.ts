import express, { json, Request, Response } from "express";

const app = express();

app.use(json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Leitura realizada com sucesso!" });
});

app.post("/", (req: Request, res: Response) => {
  //console.log(req.body); - corpo da requisição
  //console.log(req.params); - parâmetros de url (url/param)
  //console.log(req.query); - parâmetros de busca (url?param=value)
  console.log(req.headers); // configurações e credenciais de acesso
   res.status(201).json({ message: "Criação realizada com sucesso!" });
});

app.put("/", (req: Request, res: Response) => {
  res.status(200).json("Atualização realizada com sucesso!");
});

app.delete("/", (req: Request, res: Response) => {
  res.status(200).json("Exclusão realizada com sucesso!");
});

const port = 3003;

app.listen(port, () => {
  console.log(`API sucessfully started on port ${port}`);
});
