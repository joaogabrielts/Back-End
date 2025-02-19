import { TCreateProductBody } from "../interfaces/products.interface";
import {prisma} from "../database/prisma"

export class ProductServices{
    async create(body: TCreateProductBody){
        return await prisma.product.create({ data: body });
    }
}