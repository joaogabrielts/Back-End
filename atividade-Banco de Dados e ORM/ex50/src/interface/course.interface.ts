import { IStudent} from "./student.interface"


export interface ICourse{
    name:string;
    description?:string
    student: IStudent[]
}