import { StoreServices } from "./services/store.services";
import { ProductServices } from "./services/product.services";
import { response } from "express";

const storeServices = new StoreServices();

const productServices = new ProductServices();

async function exampleController() {
  const response = await productServices.create({
    name: "computador",
    price: 2500,
    description: "Computador bonito",
    storeId: 3,
  });

  console.log(response);
  
}
/*
    const response = await storeServices.createMany(["gabriel", "joão Gabriel"])

    console.log(response);
*/
//exampleController();

async function idController() {
  const response = await storeServices.findOne(3)

  console.log(response); 
}
idController()


async function idControllerMany() {
  const response = await storeServices.findMany("gabriel")

  console.log(response); 
}
//idControllerMany()

/*
contains - se assemelha ao LIKE do SQL, verificando se o valor fornecido está contido na coluna desejada.

mode - temos duas opções de valores para o filtro "mode":
 default - existe diferenciação entre maiúsculo e minúsculo


  insensitive - não existe diferenciação entre maiúsculo e minúsculo
Outros filtros avançados:

startWith - verifica se o valor contido na coluna começa com o valor fornecido

endWith - verifica se o valor contido na coluna termina com o valor fornecido

 */