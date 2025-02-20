import { StoreServices } from "./services/store.services";
import { ProductServices } from "./services/product.services";
import { response } from "express";

const storeServices = new StoreServices();

const productServices = new ProductServices();

async function createStore() {
  const response = await storeServices.create("alex")
  console.log(response);
}
//createStore()

async function exampleController() {
  const response = await productServices.create({
    name: "celular",
    price: 2500,
    description: "game console",
    storeId: 4,
  });

  console.log(response);
  /*
    const response = await storeServices.createMany(["gabriel", "joão Gabriel"])
*/
}

async function idController() {
  const response = await storeServices.findOne(3);

  console.log(response);
}

async function idControllerMany() {
  const response = await storeServices.findMany(undefined, 4, 0);

  console.log(response);
}

async function upadateStore() {
  const response = await storeServices.updateOne(1, { name: "Gabriel" });
  console.log(response);
}

async function upadateStoreMany() {
  const response = await productServices.updateMany(3, { price: 4000 });
  console.log(response);
}

async function deleteOne() {
  const response = await productServices.deleteOne(16)
  console.log(response);
  
}

async function deleteMany() {
  const response = await storeServices.deleteMany("alex")
  console.log(response);
}
deleteMany()
/*
contains - se assemelha ao LIKE do SQL, verificando se o valor fornecido está contido na coluna desejada.

mode - temos duas opções de valores para o filtro "mode":
 default - existe diferenciação entre maiúsculo e minúsculo


  insensitive - não existe diferenciação entre maiúsculo e minúsculo
Outros filtros avançados:

startWith - verifica se o valor contido na coluna começa com o valor fornecido

endWith - verifica se o valor contido na coluna termina com o valor fornecido

 */
