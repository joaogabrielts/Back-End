import { resetDataBase, todoDatabase } from "../../database/database";
import { TODOservices } from "../../services/todo.services";

describe("unit test : todo services", () => {
    //beforeEach, beforeAll, afterEach, afterAll

    beforeEach(() => {
        resetDataBase()
    })

  test("create todo should work correctly", () => {
    const todoServices = new TODOservices();

    const data = todoServices.create({ name: "gabriel", age: 18 });

    expect(data).toStrictEqual({
      id: 1,
      name: "gabriel",
      age: 18,
    });
  });

  test("create todo should work correctly", () => {
    todoDatabase.push({
      id: 1,
      name: "gabriel",
      age: 18,
    });

    const todoServices = new TODOservices();
    
    const data = todoServices.getMany();
    expect(data).toHaveLength(1)
  });
});
/*
beforeEach - irá executar uma função antes de cada teste presente no escopo.

beforeAll - irá executar uma função antes de todos os testes presentes no escopo.

afterEach - irá executar uma função após cada teste presente no escopo.

afterAll - irá executar uma função após todos os testes presentes no escopo.

*/