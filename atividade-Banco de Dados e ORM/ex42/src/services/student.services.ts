import { prisma } from "../database/prisma";
import { TCreateStudentBody } from "../interface/student.interface";

export class StudentServices {
  async create(body: TCreateStudentBody) {
    return await prisma.student.create({ data: body });
  }

  async createMany(data: TCreateStudentBody[]) {
    return await prisma.student.createMany({ data });
  }
}
