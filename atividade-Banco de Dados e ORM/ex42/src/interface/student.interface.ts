
/*
model Student {
  id          Int          @id @default(autoincrement())
  name        String
  email       String       @unique
  StudentInfo StudentInfo?
  question    Question[]
  course      Course[]
}
*/

export interface IStudent{
    id:number;
    name:string;
    email:string;
}

export type TCreateStudentBody = Omit<IStudent, "id">;