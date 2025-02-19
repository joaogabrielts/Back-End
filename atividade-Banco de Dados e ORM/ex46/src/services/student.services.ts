import { prisma } from "../database/prisma";
import { TCreateStudentBody } from "../interface/student.interface";

export class StudentServices {
  async create(body: TCreateStudentBody) {
    return await prisma.student.create({ data: body });
  }

  async createMany(data: TCreateStudentBody[]) {
    return await prisma.student.createMany({ data });
  }

  async findOne(studentId: number){
    return await prisma.studentInfo.findFirst({
      where: {id:studentId}
    })
  }

  async findMany(student?: string){
    return await prisma.student.findMany({
      where: student ? {name : {contains: student, mode: "insensitive"}} : {}, include:{StudentInfo: true} 
    })
  }





}
