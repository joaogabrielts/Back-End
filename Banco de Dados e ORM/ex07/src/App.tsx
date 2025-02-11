function App() {
  return (
    <div>
      <ol>
        <li>
          <h1>Introdução</h1>
          <p>
            Nesta aula, abordaremos dois conceitos fundamentais em bancos de
            dados relacionais: chaves primárias e chaves estrangeiras. Esses
            conceitos desempenham um papel crucial na organização e na
            manutenção da integridade dos dados em bancos de dados.
          </p>
        </li>
        <li>
          <h1> Chave Primária - Definição</h1>
          <p>
            Uma chave primária é um atributo ou conjunto de atributos em uma
            tabela de banco de dados que serve como identificador exclusivo para
            cada registro. Isso significa que nenhum valor na chave primária
            pode se repetir na tabela, garantindo que cada linha tenha uma
            identificação única. As chaves primárias são usadas para indexar e
            buscar registros de forma eficiente.
          </p>
          <div>
            <h2>2.1 Chave Primária - Características</h2>
            <ul>
              <li>
                <p>
                  Deve conter valores exclusivos: Cada valor na chave primária
                  deve ser único em relação a todas as outras linhas da tabela.
                </p>
              </li>
              <li>
                <p>
                  Deve ser não nulo: Não é permitido ter valores nulos na chave
                  primária, pois o objetivo é identificar exclusivamente cada
                  registro.
                </p>
              </li>
              <li>
                <p>
                  Pode ser composta: Uma chave primária pode ser composta por
                  vários atributos, desde que a combinação deles seja única.
                </p>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <h1> Chave Estrangeira - Definição</h1>
          <p>
            Uma chave estrangeira é um atributo em uma tabela que estabelece uma
            relação com a chave primária de outra tabela. Essa relação é usada
            para conectar dados relacionados entre diferentes tabelas. As chaves
            estrangeiras ajudam a manter a integridade referencial, garantindo
            que os dados relacionados sejam consistentes e precisos.
          </p>
          <div>
            <h2>3.1 Chave Estrangeira - Características</h2>
            <ul>
              <li>
                <p>
                  Deve corresponder a uma chave primária: A chave estrangeira
                  deve se referir a uma chave primária em outra tabela.
                </p>
              </li>
              <li>
                <p>
                  Pode ser nula: Em algumas situações, uma chave estrangeira
                  pode ter valores nulos, indicando a ausência de uma relação.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h2>3.2 Exemplo de Uso</h2>
            <p>
              Vamos considerar um exemplo de banco de dados de uma biblioteca:
            </p>
            <ul>
              <h3>Tabela "Livros" (com chave primária):</h3>
              <li>
                <p>ID_Livro (Chave Primária)</p>
              </li>
              <li>
                <p>Título</p>
              </li>
              <li>
                <p>Autor</p>
              </li>
              <li>
                <p>Ano de Publicação</p>
              </li>

              <h3>Tabela "Empréstimos" (com chave estrangeira):</h3>
              <li>
                <p>ID_Empréstimo (Chave Primária)</p>
              </li>
              <li>
                <p>ID_Livro (Chave Estrangeira)</p>
              </li>
              <li>
                <p>Data do Empréstimo</p>
              </li>
              <li>
                <p>Data de Devolução</p>
              </li>
              <li>
                <p>ID_Usuário (Chave Estrangeira)</p>
              </li>
            </ul>
            <p>
              Neste exemplo, a tabela "Empréstimos" utiliza chaves estrangeiras
              (ID_Livro e ID_Usuário) para se relacionar com as chaves primárias
              nas tabelas "Livros" e "Usuários". Isso permite que cada
              empréstimo seja associado a um livro específico e a um usuário
              específico.
            </p>
          </div>
        </li>
        <li>
          <h1>Importância das Chaves Primárias e Chaves Estrangeiras</h1>
          <ul>
            <li>
              <p>
                Mantêm a integridade dos dados: As chaves primárias garantem que
                cada registro seja único, enquanto as chaves estrangeiras mantêm
                a consistência dos dados relacionados.
              </p>
            </li>
            <li>
              <p>
                Facilitam a consulta: As chaves primárias e estrangeiras
                simplificam a busca e a recuperação de dados relacionados entre
                tabelas.
              </p>
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
}

export default App;
