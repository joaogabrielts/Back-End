function App() {
  return (
    <div>
      <h1>Introdução</h1>
      <p>
        O CRUD é um conjunto de operações básicas de manipulação de recursos em
        um sistema. Essas operações correspondem a ações fundamentais que podem
        ser realizadas em um banco de dados ou em outras formas de armazenamento
        de dados. O CRUD é frequentemente utilizado em aplicações web para
        permitir a interação do usuário com os dados do sistema. Vamos entender
        melhor cada uma das operações do CRUD:
      </p>
      <li>
        <h1> Create (Criação)</h1>
        <ul>
          <li>
            <p>
              A operação de criação permite adicionar novos recursos ao sistema.
              Ela é utilizada quando desejamos inserir informações ou dados em
              nosso banco de dados ou sistema de armazenamento.
            </p>
          </li>
          <li>
            <p>
              Exemplo: Em um sistema de gerenciamento de usuários, a operação de
              criação seria usada para adicionar um novo usuário com suas
              informações, como nome, e-mail e senha.
            </p>
          </li>
        </ul>
      </li>
      <li>
        <h1>Read (Leitura)</h1>
        <ul>
          <li>
            <p>
              A operação de leitura é usada para recuperar informações
              específicas dos recursos existentes no sistema. Ela permite a
              consulta de dados armazenados para apresentar ao usuário ou para
              utilizar em outras operações.
            </p>
          </li>
          <li>
            <p>
              Exemplo: Em um sistema de gerenciamento de produtos, a operação de
              leitura seria utilizada para obter detalhes sobre um produto
              específico, como seu preço, estoque disponível e descrição.
            </p>
          </li>
        </ul>
      </li>
      <li>
        <h1> Update (Atualização)</h1>
        <ul>
          <li>
            <p>
              A operação de atualização permite modificar informações de
              recursos existentes no sistema. Ela é utilizada quando desejamos
              fazer alterações em um dado já existente.
            </p>
          </li>
          <li>
            <p>
              Exemplo: Em um sistema de gerenciamento de tarefas, a operação de
              atualização seria usada para editar a descrição ou a data de
              conclusão de uma tarefa já cadastrada.
            </p>
          </li>
        </ul>
      </li>
      <li>
        <h1>Delete (Exclusão)</h1>
        <ul>
          <li>
            <p>
              A operação de exclusão é usada para remover recursos do sistema.
              Ela é utilizada quando desejamos eliminar permanentemente um dado
              que não é mais necessário.
            </p>
          </li>
          <li>
            <p>
              Exemplo: Em um sistema de gerenciamento de clientes, a operação de
              exclusão seria usada para remover o registro de um cliente que não
              faz mais parte da base de dados.
            </p>
          </li>
        </ul>
      </li>
      <li>
        <h1>Funcionamento do CRUD em uma Aplicação Web</h1>
        <p>
          Suponhamos que estamos construindo uma aplicação web para
          gerenciamento de tarefas:
        </p>
        <ul>
          <li>
            <p>
              Create: O usuário pode preencher um formulário com os dados de uma
              nova tarefa (nome, descrição, data de conclusão, etc.) e, ao
              clicar em "Salvar" ou "Criar Tarefa", uma requisição de criação
              (geralmente usando o método POST) é enviada ao servidor, que
              adiciona a tarefa ao banco de dados.
            </p>
          </li>
          <li>
            <p>
              Read: O usuário pode visualizar uma lista de tarefas existentes,
              clicar em uma tarefa específica para ver seus detalhes ou realizar
              uma busca por tarefas que atendam a determinados critérios. Para
              isso, o cliente envia requisições de leitura (geralmente usando o
              método GET) ao servidor, que retorna os dados correspondentes.
            </p>
          </li>
          <li>
            <p>
              Update: O usuário pode editar informações de uma tarefa, como sua
              descrição ou data de conclusão. Ao clicar em "Salvar" ou
              "Atualizar Tarefa", uma requisição de atualização (geralmente
              usando o método PUT ou PATCH) é enviada ao servidor, que atualiza
              os dados da tarefa no banco de dados.
            </p>
          </li>
          <li>
            <p>
              Delete: O usuário pode excluir uma tarefa que não é mais
              necessária. Ao clicar em "Excluir" ou "Apagar Tarefa", uma
              requisição de exclusão (geralmente usando o método DELETE) é
              enviada ao servidor, que remove a tarefa do banco de dados.
            </p>
          </li>
        </ul>
      </li>
    </div>
  );
}

export default App;
