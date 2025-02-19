import {StoreServices } from "./services/store.services"

const storeServices = new StoreServices

async function exampleController(){
    const response = await storeServices.createMany(["gabriel", "joão Gabriel"])

    console.log(response);
    
}

exampleController()