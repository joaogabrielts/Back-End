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
  const response = await storeServices.findOne(1)

  console.log(response); 
}
idController()