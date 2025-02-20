import {ICourse} from"./course.interface"



export interface IStudent{
    id:number;
    name:string;
    email:string;
    //StudentInfo?:string;
   // course?: ICourse[];

}

export type TCreateStudentBody = Omit<IStudent, "id">;

export type TUpdateStudentBody = Partial<Pick<IStudent, 'name'>>