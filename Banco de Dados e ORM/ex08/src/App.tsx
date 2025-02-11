function App() {
  return (
    <div>
      <ol>
        <li>
          <h2> Introdução</h2>
          <p>
            Nesta aula, vamos explorar um conceito essencial no projeto de
            bancos de dados relacionais: a normalização de dados. A normalização
            é um processo que visa organizar eficientemente os dados em tabelas,
            eliminando redundâncias e reduzindo a probabilidade de erros nos
            bancos de dados. Entender a normalização é fundamental para projetar
            sistemas de banco de dados que sejam eficientes, flexíveis e
            confiáveis.
          </p>
        </li>
        <li>
          <h2>Por que a Normalização é Importante</h2>
          <p>A normalização de dados tem vários objetivos fundamentais:</p>
          <ol>
            <li>
              <p>
                Reduzir a Redundância: Evitar a duplicação de dados em várias
                tabelas, economizando espaço de armazenamento e mantendo a
                consistência dos dados.
              </p>
            </li>
            <li>
              <p>
                Minimizar Atualizações Anômalas: Evitar situações em que a
                atualização de um valor em uma tabela afeta incorretamente
                outros valores em outras tabelas.
              </p>
            </li>
            <li>
              <p>
                Facilitar a Manutenção: Tornar mais simples a inserção,
                atualização e exclusão de dados sem comprometer a integridade
                dos dados.
              </p>
            </li>
            <li>
              <p>
                Melhorar o Desempenho: Ajudar a otimizar a velocidade de
                recuperação de dados e consultas.
              </p>
            </li>
          </ol>
        </li>
        <li>
          <h1>Formas Normais</h1>
          <p>
            A normalização segue uma série de regras chamadas formas normais. As
            formas normais são níveis progressivos de organização de dados,
            desde a primeira forma normal (1NF) até a quinta forma normal (5NF).
            Vamos dar uma olhada nas três primeiras formas normais:
          </p>
          <ol>
            <li>
              <h1>Primeira Forma Normal (1NF):</h1>
              <ul>
                <li>
                  <p>
                    Cada coluna em uma tabela deve conter apenas valores
                    atômicos (indivisíveis).
                  </p>
                </li>
                <li>
                  <p>
                    Cada registro deve ser único e identificado por uma chave
                    primária.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <h1>Segunda Forma Normal (2NF):</h1>
              <ul>
                <li>
                  <p>Deve atender à 1NF.</p>
                </li>
                <li>
                  <p>
                    Todos os atributos não chave devem depender completamente da
                    chave primária.
                  </p>
                </li>
                <li>
                  <p>
                    Se uma tabela tiver uma chave primária composta, cada
                    atributo não chave deve depender da chave primária completa,
                    não de parte dela.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <h1>Terceira Forma Normal (3NF):</h1>
              <ul>
                <li>
                  <p>Deve atender à 2NF.</p>
                </li>
                <li>
                  <p>
                    A eliminação transitiva deve ser eliminada. Isso significa
                    que não deve haver dependências entre atributos não chave.
                    Se um atributo não chave depende de outro atributo não
                    chave, ele deve ser movido para uma tabela separada.
                  </p>
                </li>
              </ul>
            </li>
          </ol>
        </li>
        <li>
          <h1>Exemplo de Normalização</h1>
          <p>
            Considere uma tabela de pedidos em um sistema de comércio
            eletrônico:
          </p>
          <ul>
            <h3>Tabela "Pedidos":</h3>
            <li>
              <p>ID_Pedido (Chave Primária)</p>
            </li>
            <li>
              <p>Data_Pedido</p>
            </li>
            <li>
              <p>ID_Cliente</p>
            </li>
            <li>
              <p>Nome_Cliente</p>
            </li>
            <li>
              <p>Endereço_Cliente</p>
            </li>
          </ul>
          <p>
            Essa tabela não está normalizada, pois informações do cliente
            (Nome_Cliente e Endereço_Cliente) são repetidas em cada registro de
            pedido. Para normalizá-la, criaríamos uma tabela separada para
            clientes, mantendo apenas a referência (ID_Cliente) na tabela de
            pedidos.
          </p>
        </li>
      </ol>
    </div>
  );
}

export default App;
