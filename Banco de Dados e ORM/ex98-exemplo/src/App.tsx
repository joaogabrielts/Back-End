function App() {
  return (
    <div>
      <ol>
        <li>
          <h1>Introdução</h1>
          <p>
            Nesta aula, vamos compreender como a injeção de dependência com
            Tsyringe pode influenciar a escrita e o funcionamento dos testes
            automáticos.
          </p>
        </li>
        <li>
          <h1>Reflect-metadata</h1>
          <p>
            Para utilização de injeção de dependências no NodeJS, o pacote
            reflect-metadata é essencial. Se tratando de testes unitários, a
            importação presente no arquivo app.ts não será aplicada no ambiente
            de testes. Isso, porque, os testes unitários, testam nossas funções
            e métodos de forma individual.
          </p>
          <p>
            Por isso, será necessária uma nova importação em um arquivo de
            "setup", para que a injeção de dependência seja funcional no
            ambiente de teste. Para está finalidade, no exemplo prático, dentro
            do diretório "utils" foi criado o seguinte arquivo:
          </p>

          <h4>reflectMetadata.ts</h4>

          <h1>import "reflect-metadata";</h1>

          <p>
            Para que a importação aconteça no momento que o ambiente de testes
            for iniciado, este arquivo precisou ser referenciado nas
            configurações do Jest.
          </p>

          <h4>jest.config.unit.ts</h4>
          <p>esta tudo comitado </p>
          <h2>Com esta configuração, classes contendo "decorators" de injeção de dependência poderão ser utilizadas livremente nos testes unitários.</h2>
        </li>
        <li>
          <h1>Resolvendo dependências nos testes unitários</h1>
          <p>Podemos utilizar o método resolve fornecido pelo "container" do Tsyringe, ao invés de instâncias de classe convencional em nossos testes unitários, este formato afetará positivamente a performance dos testes automáticos. Confira o exemplo abaixo:</p>
          <h4>esta tudo comitado </h4>
        </li>
      </ol>
    </div>
  );
}
/*
/** 
 
 parte 2
 @type {import('ts-jest').JestConfigWithTsJest} */

//export default {
//  preset: "ts-jest",
//  testEnvironment: "node",
//  testMatch: ["**/__tests__/units/**/*.[jt]s?(x)"],
//  setupFilesAfterEnv: [
//     "./src/__tests__/__mocks__/prisma.ts",
 //    "./src/__tests__/utils/reflectMetadata.ts",
//  ],
//};


/*
parte 3
import { container } from "tsyringe";
import { UserServices } from "../../services/user.services";
import {
   completeUserMock,
   userMock,
   userRegisterBodyMock,
} from "../__mocks__/user.mocks";
import { prismaMock } from "../__mocks__/prisma";

describe("Unit test: register user", () => {
   test("register user should work correctly", async () => {
      const userServices = container.resolve(UserServices);

      prismaMock.user.create.mockResolvedValue(completeUserMock);
      const data = await userServices.register(userRegisterBodyMock);

      expect(data).toStrictEqual(userMock);
   });

});
*/


export default App;
