import {
  TCreateProductBody,
  TUpdateProductBody,
} from "../interfaces/products.interface";
import { prisma } from "../database/prisma";

export class ProductServices {
  async create(body: TCreateProductBody) {
    return await prisma.product.create({ data: body });
  }

  async updateMany(storeId: number,data: TUpdateProductBody) {
    return await prisma.product.updateMany({where:{storeId: storeId}, data });
  }
}1
