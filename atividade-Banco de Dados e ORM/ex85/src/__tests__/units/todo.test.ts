import { todoCreateMocks, todoMocks } from "../../__mocks__/todo.mucks";
import { todoBanco, zeraBanco } from "../../database/database.todo";
import { TODOservices } from "../../services/todo.services";

describe("unit test : todo services", () => {
  beforeEach(() => {
    zeraBanco();
  });
  test("create todo should work correctly", () => {
    const todoServices = new TODOservices();

    const data = todoServices.create(todoCreateMocks);

    expect(data).toStrictEqual(todoMocks);
  });
  test("create todo should work correctly", () => {
    todoBanco.push(todoMocks)
    const todoServices = new TODOservices();
    const data = todoServices.lerBanco()
    expect(data).toHaveLength(1);
    expect(data[0]).toStrictEqual(todoMocks);
  });
});
