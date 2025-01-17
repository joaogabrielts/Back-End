function App() {
  return (
    <>
      <section>
        <ol>
          <li>
            <h1>Introdução</h1>
            <p>
              Antes de começarmos a trabalhar com TypeScript, é essencial
              configurar corretamente o ambiente de desenvolvimento. Nesta aula,
              aprenderemos como instalar e configurar as ferramentas necessárias
              para começar a escrever código TypeScript em nosso computador.
            </p>
          </li>
          <li>
            <h1>2 Node.js e npm</h1>
            <p>
              O TypeScript é construído em cima do Node.js, portanto,
              precisaremos instalá-lo em nosso sistema. O Node.js é uma
              plataforma que permite a execução de código JavaScript fora do
              navegador, permitindo-nos usar ferramentas de linha de comando
              para compilar e executar nosso código TypeScript
            </p>
            <div>
              <h3>2.1 Instalação Debian (Ubuntu, Debian)</h3>
              <span>1.Abra o terminal.</span>
              <span>2.Atualize o cache do APT:</span>
              <p>sudo apt update</p>
            </div>
            <div>
              <span>Instale o Node.js e o npm:</span>
              <p>sudo apt install nodejs npm</p>
            </div>
            <div>
              <span>
                Após a instalação, você pode verificar se o Node.js e o npm
                foram instalados corretamente usando os seguintes comandos:
              </span>
              <p>node -v npm -v</p>
            </div>
            <p>
              Essas são as etapas básicas para instalar o Node.js no Linux.
              Lembre-se de que as instruções podem variar dependendo da
              distribuição Linux que você está usando. Certifique-se de
              consultar a documentação oficial da sua distribuição para obter
              instruções específicas.
            </p>
          </li>
          <li>
            <h1>Criação de Projeto com TypeScript</h1>
            <p>
              Com o Node.js instalado, agora podemos iniciar o nosso projeto e
              instalar o TypeScript como dependência de desenvolvimento para
              podermos usar o compilador de TypeScript (tsc) em qualquer
              projeto.
            </p>
            <div>
              <h3>3.1 Inicialização do projeto</h3>
              <p>1.Abra o Terminal:</p>
              <span>
                Abra o terminal ou prompt de comando no diretório onde você
                deseja criar seu projeto.
              </span>

              <p>2.Inicie um Novo Projeto npm:</p>
              <span>
                Execute o seguinte comando para iniciar um novo projeto npm.
                Isso criará um arquivo package.json que conterá informações
                sobre o seu projeto:
              </span>

              <h4>npm init -y</h4>

              <p>
                O parâmetro -y instrui o npm a aceitar todas as configurações
                padrão sem pedir confirmações.
              </p>
            </div>
            <div>
              <h3>3.2 Instalação do TypeScript</h3>
              <p>
                Execute o seguinte comando para instalar o TypeScript como uma
                dependência de desenvolvimento em seu projeto:
              </p>

              <h4>npm install -D typescript</h4>
              <span>
                O argumento -D indica que o TypeScript será instalado como uma
                dependência de desenvolvimento e será adicionado ao arquivo
                package.json sob a seção "devDependencies".
              </span>

              <p>
                Crie um arquivo chamado tsconfig.json na raiz do seu projeto
                para configurar o TypeScript. Você pode criar manualmente esse
                arquivo ou usar o comando abaixo para gerar um arquivo de
                configuração padrão:
              </p>
              <h4>npx tsc --init</h4>
              <h4>
                Esse arquivo será usado para configurar o comportamento do
                compilador do TypeScript.
              </h4>
            </div>
            <div>
              <h3>3.3 Configuração do tsconfig.json</h3>
              <p>
                O arquivo tsconfig.json contém várias opções de configuração que
                permitem personalizar o comportamento do compilador. Neste
                momento, não precisamos alterar nenhuma opção, mas é importante
                entender algumas das opções comuns disponíveis no arquivo
                tsconfig.json:
              </p>
              <ul>
                <li>
                  target: Especifica a versão do ECMAScript para a qual o código
                  TypeScript será compilado (por exemplo, "ES5", "ES6").
                </li>
                <li>
                outDir: Diretório de saída onde os arquivos JavaScript compilados serão armazenados.

                </li>
                <li>
                rootDir: Diretório de origem onde os arquivos TypeScript estão localizados.
                </li>
                <li>
                strict: Opção que habilita várias verificações rigorosas no código TypeScript.
                </li>
              </ul>
            </div>

          </li>
          <li>
          <h3>Compilando e Executando o Código TypeScript</h3>
          <span>Agora que nosso projeto TypeScript está configurado, podemos começar a escrever nosso código.</span>
          <div>
            <h4>4.1 Compilando o Código</h4>
            <span>Para compilar nosso código TypeScript, abra o terminal e navegue até o diretório do projeto. Em seguida, execute o seguinte comando:</span>

            <h3>npx tsc</h3>
            <p>LENBRANDO PRA UTILIZAR ESSE COMANDO PRECISA ADICIONAR UM INDEX.TS NO PROJETO, PODE SER ONDE ESTA O TSCONFING</p>

            <p>Isso instruirá o compilador TypeScript a procurar o arquivo tsconfig.json no diretório atual e compilar todos os arquivos TypeScript para JavaScript, conforme as configurações definidas.</p>

            <h3>4.2 Executando o Código JavaScript</h3>
            <span>Depois que o código TypeScript for compilado com sucesso, você pode executá-lo normalmente usando o Node.js. Por exemplo:</span>

            <p>node ./caminho/para/arquivo.js</p>
            
            <p>Lembrando tambem é possivel pega o caminho do arquivo clicando com lado direito do mouse e não esquece de colocar dentro de ""</p>
          </div>
          </li>
        </ol>
      </section>
    </>
  );
}

export default App;
