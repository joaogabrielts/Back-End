import {StoreServices } from "./services/store.services"

const storeServices = new StoreServices

async function exampleController(){
    const response = await storeServices.create("Alex Store")

    console.log(response);
    
}

exampleController()