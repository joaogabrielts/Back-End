import { prisma } from "../database/prisma";
import { TUpdateStoreBody } from "../interfaces/store.interface";

export class StoreServices {
  async create(storeName: string) {
    return await prisma.store.create({ data: { name: storeName } });
  }

  async createMany(storeNames: string[]) {
    // nesse string[] não vai ser sempre que vai ser assim depende muuito como vai esta a sua tabela
    const stores = storeNames.map((storeName) => ({ name: storeName }));
    return await prisma.store.createMany({ data: stores });
  }

  async findOne(storeId: number) {
    return await prisma.store.findFirst({
      where: { id: storeId },
      include: { products: true },
    });
  }

  async findMany(search?: string, take = 10, skip = 0) {
    return await prisma.store.findMany({
      where: search ? { name: { contains: search, mode: "insensitive" } } : {},
      take,
      skip: skip, // ship * take vai fazer ter pagina umm pagina 2 e assim pra frente
    });
  }

  //update - updateMany
  async updateOne(storeId: number, data: TUpdateStoreBody) {
    return await prisma.store.update({ where: { id: storeId }, data: data });
  }
}

/* 
async findMany(search?: string) {
  return await prisma.store.findMany({ where: { name: { contains: search, mode: "insensitive" } },
  });
}
*/
