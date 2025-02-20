import { TCreateQuestionBody } from "../interface/question.interface";
import {prisma} from"../database/prisma"

export class QuestionServices{
    async create(body:TCreateQuestionBody , studentId: number){
        const newQuestion = {...body,studentId};

        return await prisma.question.create({data:newQuestion})
    }
    async deleteMany(studentId:number){
        return await prisma.question.deleteMany({where: {studentId}})
    }
}