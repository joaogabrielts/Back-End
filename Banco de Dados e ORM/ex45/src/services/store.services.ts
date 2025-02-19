import { prisma } from "../database/prisma";

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

  async findMany(search?: string) {
    return await prisma.store.findMany({
      where: search ? { name: { contains: search, mode: "insensitive" } ,} : {},
    });
  }
}

/* 
async findMany(search?: string) {
  return await prisma.store.findMany({ where: { name: { contains: search, mode: "insensitive" } },
  });
}
*/
