function App() {
  return (
    <div>
      <h1>1 Introdução</h1>
      <p>
        Nesta aula, vamos explorar dois conceitos fundamentais no projeto de
        bancos de dados: entidades e atributos. Esses conceitos são a base para
        a modelagem de dados em bancos de dados relacionais e desempenham um
        papel central na criação de estruturas de dados eficazes e organizadas.
      </p>
      <h1>2 Entidades e Atributos - Definições</h1>
      <ul>
        <li>
          <p>
            Entidade: Uma entidade representa um objeto do mundo real ou um
            conceito abstrato que pode ser diferenciado dos outros. No contexto
            de bancos de dados, uma entidade é geralmente algo que você deseja
            rastrear e armazenar informações sobre. Por exemplo, em um sistema
            de gerenciamento de biblioteca, entidades podem incluir "livros",
            "autores" e "clientes".
          </p>
        </li>
        <li>
          <p>
            Atributo: Um atributo é uma característica ou propriedade que
            descreve uma entidade. Em outras palavras, os atributos são os
            detalhes específicos que você deseja armazenar sobre uma entidade.
            Para o exemplo da entidade "livro", os atributos podem incluir
            "título", "autor", "ano de publicação" e "número de páginas".
          </p>
        </li>
      </ul>
      <h1>2.1 Exemplo de Modelagem de Entidades e Atributos</h1>
      <p>
        Vamos usar o exemplo de uma entidade "Cliente" em um sistema de
        gerenciamento de uma loja online para ilustrar a relação entre entidades
        e atributos:
      </p>
      <ul>
        <li>
          <h1>Entidade: Cliente</h1>
          <li>
            <h1>Atributos:</h1>
            <ol>
              <li>
                <p>Nome</p>
              </li>
              <li>
                <p>Sobrenome</p>
              </li>
              <li>
                <p>Endereço</p>
              </li>
              <li>
                <p>Número de telefone</p>
              </li>
              <li>
                <p>Endereço de e-mail</p>
              </li>
              <li>
                <p>Data de registro</p>
              </li>
              <li>
                <p>Numero de cliente(identificador único)</p>
              </li>
            </ol>
            <p>
              Neste exemplo, a entidade "Cliente" é definida pelos atributos que
              a descrevem. Cada cliente tem um nome, sobrenome, endereço e assim
              por diante. O número de cliente é um atributo especial que atua
              como um identificador único para cada cliente, garantindo que não
              haja duplicatas na tabela de clientes.
            </p>
          </li>
          <h1>2.2 Chaves Primárias e Chaves Estrangeiras</h1>
          <li>
            <p>
              Chave Primária: Uma chave primária é um atributo (ou conjunto de
              atributos) que identifica exclusivamente cada registro em uma
              tabela. Em nosso exemplo, o "número de cliente" pode ser uma chave
              primária na tabela de clientes.
            </p>
            <p>
              Chave Estrangeira: Uma chave estrangeira é um atributo em uma
              tabela que estabelece uma relação com a chave primária de outra
              tabela. Por exemplo, em uma tabela de pedidos, poderíamos ter uma
              chave estrangeira cliente_id que se relaciona com a chave primária
              "número de cliente" na tabela de clientes.
            </p>
          </li>
        </li>
      </ul>
    </div>
  );
}

export default App;
