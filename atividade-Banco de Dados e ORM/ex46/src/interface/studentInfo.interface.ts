
export interface IStudentInfo{
    id: number;
    phone: string;
    address: string;
    studentId: number;
}

export type TCreateStudentInfoBody = Omit<IStudentInfo, "id">;