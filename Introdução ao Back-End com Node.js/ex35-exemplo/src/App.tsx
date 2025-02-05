function App() {
  return (
    <div>
      <ol>
        <li>
          <h1>Introdução</h1>
          <p>
            Nesta aula, vamos aprender a criar uma base de projeto com Express e
            TypeScript instalados, para começarmos a desenvolver nossas APIs.
          </p>
        </li>
        <li>
          <h1>Passo a passo</h1>
          <p>
            O Express é um framework extremamente minimalista e não fornece uma
            base pronta para começar. Portanto, precisaremos iniciar um projeto
            Node.js do zero. Para fazer isso, siga os passos a seguir:
          </p>
          <div>
            <h1>Iniciando o projeto Node.js</h1>
            <p>Execute o seguinte comando para iniciar um projeto Node.js:</p>
            <h4>npm init -y</h4>
          </div>
          <div>
            <h1>Instalando dependências</h1>
            <p>
              Com o arquivo package.json gerado com sucesso, vamos instalar as
              dependências, tanto de produção quanto de desenvolvimento.
            </p>
            <span>Dependências de Produção</span>
            <h4>npm install express</h4>
            <p>Isso instalará o Express como uma dependência de produção.</p>
            <h4>Dependências de Desenvolvimento</h4>

            <p>npm install -D typescript ts-node-dev @types/express</p>

            <span>
              Essa linha instalará o TypeScript, o Ts Node Dev e as definições
              de tipo do Express como dependências de desenvolvimento.
            </span>
          </div>
          <div>
            <h1>2.3 Ignorando a node_modules</h1>
            <p>
              Após concluir as instalações, é importante ignorar a pasta
              "node_modules" para que ela não seja versionada. Crie um arquivo
              chamado ".gitignore" e adicione a seguinte instrução:
            </p>
            <p>node_modules</p>
          </div>
          <div>
            <h1>2.4 Gerando a tsconfig.json</h1>
            <p>
              Com a pasta "node_modules" devidamente ignorada, podemos gerar o
              arquivo "tsconfig.json". Utilizaremos a mesma configuração que foi
              adotada para projetos em Node.js puro em aulas anteriores. O
              conteúdo do "tsconfig.json" é o seguinte:
            </p>
            <p>
              vamos fazer essa a no codigo no tsconfing.json "include":
              ["src/**/*"],
            </p>
          </div>
          <div>
            <h1>2.5 Organizando diretório</h1>
            <p>
              Com todas as configurações feitas, crie uma pasta chamada "src" e
              dentro dela, crie um arquivo principal para o seu projeto, que
              pode ser chamado de "app.ts" ou "index.ts".
            </p>
          </div>
          <div>
            <h1>2.6 Configurando 'run dev'</h1>
            <p>Com a pasta "src" e o arquivo raiz do projeto criados, abra o "package.json" e crie um script chamado "dev" com a seguinte instrução:</p>
            <h4>"dev": "tsnd --respawn src/.ts"</h4>
            <p>Isso configurará o comando "npm run dev" para executar seu arquivo principal com o TypeScript Node Dev.</p>
          </div>
        </li>
      </ol>
    </div>
  );
}

export default App;
