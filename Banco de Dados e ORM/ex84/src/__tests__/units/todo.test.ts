import { todoMock, todoCreateBodyMock } from "../../__mocks__/todo.mocks";
import { resetDataBase, todoDatabase } from "../../database/database";
import { TODOservices } from "../../services/todo.services";

describe("unit test : todo services", () => {
    //beforeEach, beforeAll, afterEach, afterAll

    beforeEach(() => {
        resetDataBase()
    })

  test("create todo should work correctly", () => {
    const todoServices = new TODOservices();

    const data = todoServices.create(todoCreateBodyMock);

    expect(data).toStrictEqual(todoMock);
  });

  test("create todo should work correctly", () => {
    todoDatabase.push(todoMock);

    const todoServices = new TODOservices();
    
    const data = todoServices.getMany();
    expect(data).toHaveLength(1)
    expect(data[0]).toStrictEqual(todoMock)
  });
});
/*
beforeEach - irá executar uma função antes de cada teste presente no escopo.

beforeAll - irá executar uma função antes de todos os testes presentes no escopo.

afterEach - irá executar uma função após cada teste presente no escopo.

afterAll - irá executar uma função após todos os testes presentes no escopo.

*/