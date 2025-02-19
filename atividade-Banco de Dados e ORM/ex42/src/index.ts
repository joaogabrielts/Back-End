
import  {StudentServices  } from "./services/student.services"

const studentServices = new StudentServices();

async function exampleController() {
    const response = await studentServices.create({
        name: "Gabriel",
        email: "gabriell@gmail.com",
    });
    console.log(response);
}

exampleController()
/*SELECT * FROM "Student" WHERE id = 12;
 */

async function exampleControllerMany() {
    const response = await studentServices.createMany([
        { name: "Maria", email: "maria123@email.com" },
        { name: "José", email: "jose123@email.com" },
    ]);
    console.log(response);
}
exampleControllerMany()

