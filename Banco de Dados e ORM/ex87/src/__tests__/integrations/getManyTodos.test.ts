import { resetDatabase, todoDatabase } from "../../database/database"
import { todoListMock } from "../__mocks__/todo.mocks";
import { request } from "../utils/request";

describe("Integration test: get many todos",() => {
    beforeEach(() => {
        resetDatabase();
    });

    test("should be able to get many todos successfully", async () => {
        todoListMock.forEach(todo => todoDatabase.push(todo));

        const data = await request.get("/todos").then(response => response.body);

        expect(data).toStrictEqual(todoListMock);
    });
})

/*
send - permite enviar um valor como corpo de requisição.

expect - recurso do próprio Supertest que permite colocar uma expectativa de "status code" na requisição.

then - permite executar um comportamento após a requisição e interagir com a resposta. No exemplo acima, foi utilizado para retornar o corpo de requisição.

*/