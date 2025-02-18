function App() {
  return (
    <div>
      <ol>
        <li>
          <h1> Introdução</h1>
          <p>
            Nesta aula, exploraremos o conceito de ORM e, ao mesmo tempo,
            apresentaremos o Prisma, a ferramenta que iremos conhecer e utilizar
            ao longo deste ciclo de aulas.
          </p>
        </li>
        <li>
          <h1>O que é ORM?</h1>
          <p>
            ORM, que significa "Object-Relational Mapping" (Mapeamento
            Objeto-Relacional), é uma técnica de programação que permite aos
            desenvolvedores interagir com bancos de dados relacionais usando
            objetos e classes em vez de escrever consultas SQL diretamente.
          </p>
          <p>
            Isso torna o desenvolvimento de aplicativos que dependem de bancos
            de dados relacionais mais eficiente e menos propenso a erros, além
            de tornar o código mais legível e manutenível.
          </p>
        </li>
        <li>
          <h1> Prisma</h1>
          <p>
            Prisma é um moderno ORM (Object-Relational Mapping) e uma ferramenta
            de banco de dados para JavaScript e TypeScript.{" "}
          </p>
          <p>Suas principais vantagens são:</p>
          <ol>
            <li>
              <p>
                Geração de código: Ele gera automaticamente código TypeScript
                com base no seu modelo de dados, tornando o desenvolvimento mais
                eficiente e reduzindo erros.
              </p>
            </li>
            <li>
              <p>
                Segurança: Prisma ajuda a evitar injeções SQL e outros problemas
                de segurança, protegendo seu aplicativo contra vulnerabilidades
                comuns.
              </p>
            </li>
            <li>
              <p>
                Migrações de banco de dados: Facilita a criação e aplicação de
                migrações de banco de dados para manter o esquema do banco de
                dados em sincronia com o código da aplicação.
              </p>
            </li>
            <li>
              <p>
                Integração com várias bases de dados: Prisma suporta uma
                variedade de sistemas de gerenciamento de banco de dados,
                incluindo PostgreSQL, MySQL e SQLite.
              </p>
            </li>
            <li>
              <p>
                Facilidade de uso: A API do Prisma é projetada para ser
                intuitiva e simplificar tarefas comuns relacionadas a bancos de
                dados.
              </p>
            </li>
          </ol>
        </li>
      </ol>
    </div>
  );
}

export default App;
