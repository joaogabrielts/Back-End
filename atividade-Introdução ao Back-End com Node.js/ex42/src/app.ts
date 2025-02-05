import express, { Request, Response, json } from "express";
import { booksRouter } from "./routes/books.routes";

const app = express();

app.use(json());

app.use("/books", booksRouter)

const port = 3000;

app.listen(3008, () => {
    console.log(`API sucessfully started at port ${port}`);
})