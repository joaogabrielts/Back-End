function App() {
  return (
    <div>
      <ol>
        <li>
          <h1>Introdução</h1>
          <p>
            Nesta aula, aprenderemos a realizar deploy de nossas APIs no Render
            criando um "Web Service".
          </p>
        </li>
        <li>
          <h1>Criação de um Web Service</h1>
          <p>
            Para criar um web service no Render, clique no botão "New +" e em
            seguida selecione a opção "Web Service".
          </p>

          <p>
            Ao selecionar esta opção, será aberto um formulário para selecionar
            a origem do deploy, escolha "Build and deploy from git repository"
            para selecionar um projeto vinculado a sua conta do GitHub.
          </p>

          <p>
            Feito isso, caso você já tenha vinculado sua conta do GitHub, serão
            listados todos os seus repositórios, do contrário, haverá um botão
            sugerindo o vínculo.
          </p>

          <p>
            Selecione o repositório desejado, e, após a seleção, você será
            redirecionado para o formulário de criação de "Web Service".
          </p>

          <ol>
            <h1>Atente-se para finalidade de cada um dos campos:</h1>
            <li>
              <p>Name: nome da aplicação no Render.</p>
            </li>
            <li>
              <p>Region: região do serviço.</p>
            </li>
            <li>
              <p>
                Branch: branch do repositório alvo do deploy. É muito comum se
                criarem "deploys" de desenvolvimento e produção.
              </p>
            </li>
            <li>
              <p>
                Root Directory: diretório raiz do projeto. Em caso de projetos
                criados com NodeJS, o local do arquivo package.json. Por padrão,
                caso esse valor não seja fornecido, o diretório raiz será a
                pasta principal do projeto.
              </p>
            </li>
            <li>
              <p>
                Runtime: qual será a tecnologia que ira rodar o seu projeto.
                Caso o Node não estiver selecionado, selecione o mesmo.
              </p>
            </li>
            <li>
              <p>
                Build Command: comandos de build de projeto. O Render sugere o
                gerenciamento de pacotes com "yarn", fique a vontade para usar o
                npm se quiser. Neste campo, insira "yarn" (equivalente ao "npm
                install") e "yarn build" (equivalente ao "npm run build").
              </p>
            </li>
            <li>
              <p>
                Start Command: comandos de inicialização do projeto. Neste
                campo, insira "yarn migrate:deploy" (equivalente ao "npm run
                migrate:deploy") e "yarn start" (equilavante a "npm run start").
              </p>
            </li>
            <h2>
              Atenção: os comandos de build e inicialização podem variar com
              base no que foi configurado em package.json.
            </h2>
          </ol>

          <div>
            <h1>2.1 Variáveis de ambiente</h1>
            <p>
              Para fornecer as variáveis de ambiente para o "Web Service", após
              a seleção de planos, clique no botão "Advanced", você poderá
              adicionar variáveis de ambiente no formulário representado na
              imagem abaixo.
            </p>
            <h4>
              Insira todas as variáveis de ambiente necessárias para o
              funcionamento do seu projeto.
            </h4>
          </div>
          <div>
            <h1>2.2 Node Engine
            </h1>
            <p>Dependendo do projeto, o Render, poderá solicitar a configuração do Node Engine, isso, porque por padrão, o Render utiliza a versão 14 do Node, que pode não ser compatível com projetos mais atuais.</p>
            <p>Você poderá fazer esta configuração no package.json do projeto. Confira o exemplo o abaixo:

</p>
          </div>
          <div>
            <h1>2.3 Go Live
            </h1>
            <p>Quando o projeto estiver no ar, será possível acessar a API através da URL fornecida pelo próprio Render. Além de, ter acesso um painel para diversas opções de configurações.</p>

            <h3>Algumas opções e abas relevantes:</h3>
            <ol>
              <li>
                <p>Manual Deploy: permite refazer o deploy com base no último commit, caso necessário.
                </p>
              </li>
              <li>
                <p>Events: lista um histórico de eventos acontecidos no Render.
                </p>
              </li>
              <li>
                <p>Logs: histórico de logs emitidos pela aplicação.
                </p>
              </li>
              <li>
                <p>Environment: permite configurar as variáveis de ambiente.
                </p>
              </li>
              <li>
                <p>Settings: permite alterar configurações estabelecidas no primeiro deploy.
                </p>
              </li>
            </ol>
          </div>
        </li>
      </ol>
    </div>
  );
}

export default App;
