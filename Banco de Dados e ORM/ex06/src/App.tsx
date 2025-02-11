function App() {
  return (
    <div>
      <h1>1 Introdução</h1>
      <p>
        Nesta aula, vamos explorar os tipos de dados em bancos de dados e como
        eles são fundamentais para definir a estrutura e o comportamento das
        informações armazenadas. Os tipos de dados desempenham um papel crucial
        na garantia da precisão e consistência dos dados em um banco de dados.
      </p>
      <div>
        <h1>2 O Que São Tipos de Dados</h1>{" "}
        <p>
          Tipos de dados em bancos de dados são categorias que especificam que
          tipo de informação pode ser armazenada em um campo ou coluna. Cada
          tipo de dado possui um conjunto de valores possíveis e regras para seu
          uso. A escolha do tipo de dado apropriado é essencial para garantir a
          integridade dos dados e otimizar o armazenamento.
        </p>
      </div>
      <div>
        <h1>2.1 Tipos de Dados Comuns</h1>
        <ol>
          <li>
            <h2>Texto (String)</h2>
            <ul>
              <li>
                <p>
                  CHAR(n): Armazena uma string de tamanho fixo de comprimento n.
                </p>
              </li>
              <li>
                <p>
                  VARCHAR(n): Armazena uma string de tamanho variável com
                  comprimento máximo n.
                </p>
              </li>
              <li>
                <p>
                  TEXT: Armazena texto longo, sem limite específico de tamanho.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <h2>Numérico:</h2>
            <ul>
              <li>
                <p>INTEGER: Armazena números inteiros.</p>
              </li>
              <li>
                <p>
                  NUMERIC(p, s): Armazena números decimais com precisão p e
                  escala s (pode ser usado para valores monetários).
                </p>
              </li>
              <li>
                <p>
                  FLOAT(n): Armazena números de ponto flutuante com n dígitos de
                  precisão.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <h2>Data e Hora</h2>
            <ul>
              <li>
                <p>DATE: Armazena uma data (ano, mês, dia).</p>
              </li>
              <li>
                <p>TIME: Armazena um horário do dia (hora, minuto, segundo).</p>
              </li>
              <li>
                <p>TIMESTAMP: Armazena data e hora.</p>
              </li>
            </ul>
          </li>
          <li>
            <h2>Booleano:</h2>
            <ul>
              <li>
                <p>BLOB: Armazena dados binários, como imagens ou arquivos.</p>
              </li>
            </ul>
          </li>
          <li>
            <h2>Binário:</h2>
            <ul>
              <li>
                <p>BLOB: Armazena dados binários, como imagens ou arquivos.</p>
              </li>
            </ul>
          </li>
          <li>
            <h2>Chave Primária e Chave Estrangeira:</h2>
            <ul>
              <li>
                <p>
                  SERIAL: Um tipo especial usado para criar chaves primárias
                  autoincrementadas.
                </p>
              </li>
              <li>
                <p>
                  INTEGER ou BIGINT: Usados para chaves primárias ou chaves
                  estrangeiras, dependendo do tamanho necessário.
                </p>
              </li>
            </ul>
          </li>
        </ol>
        <h1>2.2 Escolhendo o Tipo de Dado Adequado</h1>
        <p>
          A escolha do tipo de dado adequado é importante para economizar espaço
          de armazenamento e garantir a precisão dos cálculos. Por exemplo,
          armazenar números inteiros em vez de números de ponto flutuante quando
          não é necessário precisão decimal economiza espaço. Além disso, usar
          tipos de dados apropriados ajuda a evitar erros de conversão.
        </p>

        <h1>2.3 Normalização de Dados e Tipos de Dados</h1>
        <p>
          Ao projetar um banco de dados, os tipos de dados desempenham um papel
          na normalização de dados, o processo de organizar os dados para
          eliminar redundâncias e manter a integridade referencial. Tipos de
          dados apropriados ajudam a definir as relações entre tabelas e a
          otimizar a estrutura do banco de dados.
        </p>
      </div>
    </div>
  );
}

export default App;
