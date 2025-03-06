function App() {
  return (
    <div>
      <ol>
        <li>
          <h1>Introdução</h1>
          <p>
            Nesta aula, vamos aprender a lidar com exceções em testes unitários
          </p>
        </li>
        <li>
          <h1>Tratando exceções</h1>
          <p>
            Nem toda lógica que escrevermos tem um caminho único. Na
            programação, com a existência de condicionais, funções e métodos
            podem ter mais um comportamento possível. Para que, nossa cobertura
            de testes seja completa, é necessário testar cada um destes
            comportamentos.
          </p>
          <p>Confira o código abaixo:</p>
          <h3>esta comitado</h3>
          <p>
            No código acima, temos duas situações possíveis de comportamento, o
            comportamento bem-sucedido, já testado na aula anterior, e a exceção
            contida nesta na condicional abaixo:
          </p>
          <h3>esta comitado</h3>
          <p>
            A exceção acima emite um erro, o que, seguindo o comportamento
            padrão das expectativas de testes automáticos, resultaria na falha
            do teste caso essa exceção acontecesse.
          </p>
          <p>
            Entendo este comportamento, para tratarmos esta exceção em nossos
            testes unitários, será necessário a utilização do rejects, utilizado
            para declarar expectativas de erro em testes automáticos. Confira o
            exemplo de código abaixo:
          </p>
          <h3>esta comitado</h3>
          <p>Observe que, ao utilizarmos rejects, precisaremos receber como parâmetro de expect a execução do método ou função.</p>
          <p>Desta forma, a expectativa estabelecida será com base no comportamento do método, com isso, poderemos declarar expectativas em relação ao erro, como, por exemplo, o toThrow que analisa a mensagem de erro.</p>
        </li>
      </ol>
    </div>
  );
}
/*
async register(body: TUserRegisterBody): Promise<TUserReturn> {
   const existingUser = await prisma.user.findFirst({ where: { email: body.email } });

   if (existingUser) {
      throw new AppError("This email is already registered", 403);
   }

   const hashPassword = await bcrypt.hash(body.password, 10);

   const userData: TUserRegisterBody = {
      ...body,
      password: hashPassword,
   };

   const newUser = await prisma.user.create({ data: userData });

   return userReturnSchema.parse(newUser);
}
   ------------------------------------------------------------------------------------------

   const existingUser = await prisma.user.findFirst({ where: { email: body.email } });
⁠
if (existingUser) {
   throw new AppError("This email is already registered", 403);
}

--------------------------------------------------------------------------------------------------

test("register user should throw error when email is already registered", async () => {
   const userServices = container.resolve(UserServices);

   prismaMock.user.findFirst.mockResolvedValue(completeUserMock);
   const register = async () => await userServices.register(userRegisterBodyMock);
   
   expect(register()).rejects.toThrow("This email is already registered");
});
*/

export default App;
