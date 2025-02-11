function App() {
  return (
    <div>
      <h1>Configurando o PostgreSQL</h1>
      <p>
        São necessárias algumas configurações adicionais no Windows para
        conseguirmos acessar as funcionalidades do PostgreSQL através do
        terminal.
      </p>
      <p>
        Mais uma vez, preparamos uma sequência de passos que detalham o que é
        necessário fazer. Siga-os com atenção sem pular nenhuma etapa e logo
        nosso PostgreSQL estará pronto para uso.
      </p>
      <div>
        <h1>Passo 1: Acessando o terminal interativo do PostgreSQL</h1>
        <p>
          Para acessarmos o terminal iterativo do PostgreSQL, onde os comandos
          SQL serão executados, precisamos executar o comando abaixo:
        </p>
        <h3>psql</h3>
        <p>
          Ao executar esse comando, você irá receber uma mensagem parecida com
          essa: “psql: command not found”.
        </p>
        <p>
          Essa mensagem é normal, o sistema operacional ainda não reconhece esse
          comando, pois, não indicamos para ele onde está sendo armazenado os
          arquivos do PostgreSQL.
        </p>
        <p>
          Para resolver esse problema, indicaremos onde esses arquivos estão por
          meio de uma variável de ambiente do Windows.
        </p>
      </div>
      <div>
        <h1>
          psql_command_windows.png Passo 2: Acessando as propriedades do Windows
        </h1>
        <p>
          Abra seu menu iniciar e na barra de pesquisa procure por variáveis.
          Você deverá encontrar a opção “Editar as variáveis de ambiente do
          sistema” como na imagem abaixo. Clique nela e vamos para o próximo
          passo:
        </p>
        <h1>Passo 2: Acessando as propriedades do Windows</h1>
        <p>
          Abra seu menu iniciar e na barra de pesquisa procure por variáveis.
          Você deverá encontrar a opção “Editar as variáveis de ambiente do
          sistema” como na imagem abaixo. Clique nela e vamos para o próximo
          passo:
        </p>
        <h1>Passo 3: Acessando as variáveis de ambiente</h1>
        <p>
          Na nova janela que abriu, clique em “Variáveis de Ambiente” e vá para
          o próximo passo:
        </p>
        <h1>Passo 4: Selecionando a variável “Path” para ediçã</h1>
        <p>
          Na nova janela que abriu, selecione a variável “Path” e clique em
          “Editar”:
        </p>
        <h1>Passo 5: Apontando os arquivos binários do PostgreSQL</h1>
        <p>
          Na nova janela que abriu, clique em “Novo”. Uma caixa de texto logo
          abaixo do último endereço entrou em foco, é nessa caixa em que
          colocaremos a localização dos arquivos binários do PostgreSQL.
        </p>
        <p>
          Caso você não tenha alterado a pasta padrão onde o PostgreSQL é
          instalado, o caminho correto deve ser o seguinte: C:\Program
          Files\PostgreSQL\16\bin.
        </p>
        <h1>Importante</h1>
        <p>
          Após colocar o caminho da pasta que contém os binários do PostgreSQL
          clique em OK em todas as janelas que foram abertas, só assim que a
          configuração feita será mantida.
        </p>
      </div>
      <div>
        <h1>Primeiro acesso ao psql</h1>
        <p>
          Abra um novo terminal, nele realizaremos o primeiro acesso ao terminal
          integrado do PostgreSQL (psql). Execute o seguinte comando no
          terminal:
        </p>
        <h3>psql</h3>
        <p>
          Por padrão, o psql pede a senha do usuário para que a conexão será
          feita. Esse usuário é o mesmo usuário do seu Windows, porém, a senha
          de conexão dele é outra.
        </p>
        <p>
          Independente da senha que você colocar, o psql irá retornar um erro no
          terminal parecido com a imagem abaixo. Nela podemos ver também que o
          nome do usuário que a conexão está sendo feita é o mesmo nome de
          usuário do Windows:
        </p>
        <h1>Fazendo conexão com o superusuário postgres</h1>
        <p>
          Por padrão, ao fazermos a instalação do PostgreSQL, o usuário
          “postgres” é criado e a senha dele é a mesma senha que colocamos no 5º
          passo da instalação do PostgreSQL no Windows.
        </p>
        <p>
          Para fazermos a conexão com o usuário postgres, precisamos utilizar a
          flag -U (flag utilizada para especificar qual o nome do usuário que
          queremos nos conectar, por padrão utiliza o nome do usuário do
          Windows):
        </p>
        <h3>psql -U postgres </h3>
        <p>
          Insira a senha definida na instalação e você irá se conectar no psql
          com o usuário postgres.
        </p>
      </div>
      <div>
        <h1>Criando o primeiro usuário</h1>
        <p>
          Tomaremos o cuidado de criar o novo usuário com o mesmo nome do nosso
          usuário do Windows. Assim, quando quisermos conectar no psql, seremos
          conectados diretamente com esse usuário.
        </p>
        <p>
          Para criar o nosso primeiro usuário na psql, usaremos o comando CREATE
          USER. Criaremos uma senha para este usuário e também daremos algumas
          permissões:
        </p>
        <ol>
          <li>
            <p>
              SUPERUSER: Ultrapassa qualquer verificação de segurança,
              executando qualquer tarefa sem problemas;
            </p>
          </li>
          <li>
            <p>
              CREATEROLE: Permite a criação de roles (outros usuários) através
              do usuário;
            </p>
          </li>
          <li>
            <p>CREATEDB: Permite a criação de novos bancos de dados.</p>
          </li>
        </ol>
        <p>
          Você pode seguir o exemplo abaixo. E perceba como o nome de usuário
          que escolhemos é igual ao nome de usuário que aparece no prefixo do
          console.
        </p>
        <p>
          Ao executar o comando, recebemos de volta a mensagem CREATE ROLE,
          indicando que o processo foi bem-sucedido.
        </p>
        <h2>Importante</h2>
        <p>
          Caso o seu nome de usuário do Windows contenha alguma letra maiúscula
          ou hífen, será necessário colocar o nome do usuário entre aspas duplas
          no comando de criação. ⁠A senha (password) deverá sempre ser passada
          entre aspas simples.
        </p>
        <p>Então o comando ficará parecido com esses:</p>
        <h1>
          CREATE USER "SEU_USUARIO_WINDOWS" CREATEROLE CREATEDB SUPERUSER
          PASSWORD '1234';
        </h1>
      </div>
      <div>
        <h1>Criando o primeiro banco de dados</h1>
        <p>
          Assim como o criamos um usuário com o mesmo nome do Windows, também
          precisamos criar um banco de dados com o mesmo nome, para que assim
          seja possível se conectar no psql com o nosso próprio usuário.
        </p>
        <p>
          Ao executar o comando, recebemos de volta a mensagem CREATE DATABASE,
          indicando que o processo foi bem-sucedido.
        </p>
        <h1>Importante </h1>
        <p>
          Assim como na criação de usuário, caso o seu nome de usuário do
          Windows contenha alguma letra maiúscula ou hífen, será necessário
          colocar o nome do usuário entre aspas duplas no comando de criação.
        </p>
        <p>Então o comando ficará parecido com esses:</p>
        <h1>CREATE DATABASE "SEU_USUARIO_WINDOWS";</h1>
        <p>Agora que temos o usuário e banco de dados criado, podemos sair do psql executando o comando \q ou exit.</p>
      </div>
      <h1>Acessando o psql
      </h1>
      <p>Agora, ao executarmos psql no terminal e colocarmos a senha dele, iremos nos conectar diretamente no psql com o usuário que criamos, se tornando desnecessário fazer a conexão utilizando o usuário postgres.</p>
    </div>
  );
}

export default App;
