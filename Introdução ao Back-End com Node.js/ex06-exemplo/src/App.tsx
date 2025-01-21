function App() {
  return (
    <>
      <div>
        <ol>
          <li>
            <h1>1 Arquivo tsconfig.json</h1>
            <p>
              Os arquivos tsconfig.json são arquivos de configuração usados pelo
              compilador TypeScript. Eles permitem que você defina opções de
              compilação, como o diretório de origem do seu código TypeScript, o
              diretório de saída do código compilado e as configurações de tipos
              de biblioteca. Para pegarmos a configuração inicial do
              tsconfig.json executamos o seguinte comando no terminal:
            </p>

            <h4>npx tsc --init</h4>
            <div>
              <h3>importante</h3>
              <p>
                para utilizar esse comando é necessário ter o TypeScript
                instalado no projeto.
              </p>
              <h4>npm i -D typescript</h4>
            </div>

            <h3>
              Estaremos utilizando as seguintes configurações do arquivo
              tsconfig.json:
            </h3>
            <div>
              <p>Cinfiguraçaõ no caderno</p>
            </div>

            <ul>
              <li>
                <h3>"compilerOptions"</h3>
                <p>
                  é um objeto que contém opções de configuração do compilador.
                </p>
              </li>
              <li>
                <h3>"target" </h3>
                <p>
                  {" "}
                  é a versão do JavaScript para qual o código TypeScript será
                  compilado.
                </p>
              </li>
              <li>
                <h3>"module" </h3>
                <p>é o módulo que será usado para o código compilado.</p>
              </li>
              <li>
                <h3>"typeRoots" </h3>
                <p>
                  {" "}
                  é um array que contém os caminhos onde o compilador TypeScript
                  deve procurar arquivos de tipos (.d.ts).
                </p>
              </li>
              <li>
                <h3>"esModuleInterop" </h3>
                <p>
                  {" "}
                  é uma opção que ativa ou desativa a sintaxe de importação e
                  exportação padrão do JavaScript (ES6).
                </p>
              </li>
              <li>
                <h3>"forceConsistentCasingInFileNames" </h3>
                <p>
                  {" "}
                  o compilador irá garantir que os nomes de arquivos sempre
                  estejam escritos da mesma forma, independentemente do sistema
                  de arquivos usado.
                </p>
              </li>
              <li>
                <h3>"strict"</h3>
                <p>
                  é uma opção que ativa ou desativa o modo estrito de tipagem.
                </p>
              </li>
              <li>
                <h3>"exactOptionalPropertyTypes"</h3>
                <p>
                  especifica se os tipos de propriedades opcionais devem ser
                  exatos.
                </p>
              </li>
              <li>
                <h3>"skipLibCheck"</h3>
                <p>
                  {" "}
                  o compilador irá pular a verificação de tipos em arquivos de
                  biblioteca e evitar gerar erros desnecessários, permitindo que
                  você importe e utilize esses arquivos sem problemas.
                </p>
              </li>
              <li>
                <h3>"include" </h3>
                <p>
                  {" "}
                  é um array de caminhos de arquivos que devem ser incluídos na
                  compilação.
                </p>
              </li>
              <li>
                <h3>"exclude"</h3>
                <p>
                  é um array de caminhos de arquivos que devem ser excluídos da
                  compilação.
                </p>
              </li>
            </ul>
          </li>
        </ol>
        <h2>
          Os arquivos tsconfig.json são usados pelo comando tsc (TypeScript
          Compiler) para saber como compilar o seu código. Ele procura por um
          arquivo tsconfig.json no diretório atual e em sua árvore de diretórios
          acima. Se você precisar especificar uma configuração diferente, pode
          passar o caminho para um arquivo tsconfig.json personalizado como
          argumento para o comando tsc.
        </h2>
      </div>

      <div>
        <h1>Conclusões </h1>
        <p>
          depois de instala o typsscript no arquivo e no global , podemos
          criaro src e colocar o index.tsx e o index.js basta ir no terminal e
          colocar tsc que vai criar
        </p>
        <p>pra baixar globalmente   npm install -g typescript
        </p>
        <p>
          veririfa versao 
          tsc --version
        </p>
        <h4>o tsc ficará disponível e você pode usá-lo com:</h4>
        <p>npx tsc ou  tsc
         </p>
      </div>
    </>
  );
}

export default App;
