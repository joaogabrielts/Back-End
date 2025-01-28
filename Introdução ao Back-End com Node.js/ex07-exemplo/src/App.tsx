function App() {
  return (
    <div>
      <ol>
        <li>
          <h1>Ts-node-dev</h1>
          <p>
            ⁠O ts-node-dev é um utilitário que permite executar arquivos
            TypeScript diretamente sem precisar compilá-los primeiro. Ele também
            possibilita recarregar automaticamente o código quando houver
            alterações, o que pode ser muito útil durante o desenvolvimento,
            pois permite testar rapidamente mudanças no código sem precisar
            parar e iniciar o aplicativo manualmente. Para utilizarmos
            ele,precisamos instalá-lo na aplicação como dependência de
            desenvolvimento:
          </p>
          <h3>npm install -D ts-node-dev  </h3>
        </li>
        <li>
          <h1>1.1 Script de run dev</h1>
          <p>
            Para facilitar a execução do nosso projeto, podemos inserir nos
            scripts de package.json a seguinte instrução:
          </p>
          <h3>"dev": "tsnd arquivoprincipal.ts"</h3>
          <p>⁠Algumas opções do ts-node-dev (ou tsnd):</p>
          <ul>
            <li>
              <p>
                --ignore-watch - (default: []) - arquivos e pastas que serão
                ignorados pelo node-dev. Irá sempre buscar por caminhos
                absolutos, ou seja, partindo da raiz do projeto.
              </p>
            </li>
            <li>
              <p>
                --clear (--cls) - Irá limpar o terminal toda vez que o servidor
                for reiniciado.
              </p>
            </li>
            <li>
              <p>
                --respawn - Irá reiniciar o servidor automaticamente a cada
                alteração realizado no código.
              </p>
            </li>
            <li>
              <p>
                --rs - Possibilita reiniciar a aplicação escrevendo rs no
                terminal.
              </p>
            </li>
          </ul>
          <h2>como utilizar </h2>
          <p>  "dev": "tsnd --respawn src/index.ts"</p>
        </li>
      </ol>
    </div>
  );
}

export default App;
