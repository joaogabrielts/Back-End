import { TCreateStudentInfoBody } from "../interface/studentInfo.interface";
import { TUpdateStudentInfoBody } from "../interface/studentInfo.interface";
import { prisma } from "../database/prisma";

export class StudentInfo {
  async create(body: TCreateStudentInfoBody) {
    return await prisma.studentInfo.create({ data: body });
  }
  async updateMany(studentId: number, data: TUpdateStudentInfoBody) {
    return await prisma.studentInfo.updateMany({
      where: { studentId: studentId },
      data,
    });
  }
}
