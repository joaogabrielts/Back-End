import { StudentInfo } from "./services/studentInfo.services";
import { StudentServices } from "./services/student.services";

const studentServices = new StudentServices();

const studentInfoServices = new StudentInfo();

async function studentInfo() {
  const studentInfo1 = await studentInfoServices.create({
    address: "Endereço 2",
    phone: "3333-3333",
    studentId: 20,
  });
  const studentInfo2 = await studentInfoServices.create({
    address: "Endereço 3",
    phone: "3533-3533",
    studentId: 21,
  });

  console.log(studentInfo1);
  console.log(studentInfo2);
}
//studentInfo()

async function studentPesquisa() {
  const findOne = await studentServices.findOne(1);

  const findMany = await studentServices.findMany();

  const searchMany = await studentServices.findMany("gabriel");

  //console.log(findOne);

  console.log(findMany);

  //console.log(searchMany);
}
studentPesquisa();

async function exampleController() {
  const response = await studentServices.create({
    name: "Gabriel",
    email: "gabriell@gmail.com",
  });
  console.log(response);
}

//exampleController()
/*SELECT * FROM "Student" WHERE id = 12;
 */

async function exampleControllerMany() {
  const response = await studentServices.createMany([
    { name: "juliana", email: "maria1233@email.com" },
    { name: "davi", email: "jose1235@email.com" },
  ]);
  console.log(response);
}
//exampleControllerMany()

async function updateStudent() {
  const response = await studentServices.updateOne(1, {
    name: "Gabriel teixeira",
  });
  //console.log(response);

  const responseMany = await studentInfoServices.updateMany(1, {phone:"21976217390"});
  console.log(responseMany);
  
}
updateStudent();
