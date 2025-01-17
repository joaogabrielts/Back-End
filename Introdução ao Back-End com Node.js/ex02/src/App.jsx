function App() {
  return (
    <div>
      <div>
        <h1>Instalando o ASDF</h1>
        <p>
          ASDF (Another Version Manager) é uma ferramenta de gerenciamento de
          versões para várias linguagens de programação, como Ruby, Node.js,
          Python, e muito mais. Ele permite que você instale e gerencie
          múltiplas versões de uma linguagem de programação em um único sistema,
          sem conflitos de versão, e facilmente mude entre elas. Digite o
          seguinte comando no terminal para clonar o repositório e a branch da
          última versão do asdf que queremos:
        </p>
        <ul>
          <li>
            <p>
              git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch
              v0.13.1
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h1>Script de configuração</h1>
        <p>
          Agora precisamos adicionar o asdf no script de configurações do shell.
        </p>
        <ul>
          <h1>aviso</h1>
          <li>
            <p>
              Para saber qual o tipo do seu shell, digite o seguinte comando no
              seu terminal:
            </p>
            <span>echo $SHELL</span>
            <p>
              O final do caminho retornado é o tipo do seu shell. Siga apenas
              uma das opções abaixo, conforme o tipo do shell utilizado pelo seu
              terminal.⁠
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h1>Bash</h1>
        <ul>
          <li>
            <p>
              Execute o seguinte comando para abrir o script de configuração:
            </p>
            <span>code ~/.bashrc</span>
          </li>
          <li>
            <p>Agora adicione as seguintes linhas no final do arquivo:</p>
            <span>
              . $HOME/.asdf/asdf.sh . $HOME/.asdf/completions/asdf.bash
            </span>
          </li>
          <li>
            <p>
              Depois, basta reiniciar o terminal ou executar o seguinte comando:
            </p>
            <span>source ~/.bashrc</span>
          </li>
          <li>
            <p>
              Agora, o asdf já deve estar instalado e o seguinte comando
              retornará a versão do asdf instalada (v0.13.1-...):
            </p>
            <span>asdf --version</span>
          </li>
        </ul>
      </div>
      <div>
        <div>
          <h1>Atualizando e Instalando o Node.js</h1>
          <p>
            Com o asdf instalado e configurado, a forma de atualizar e instalar
            o Node.js é bem similar, instalaremos o plugin que irá nos
            possibilitar gerenciar e instalar múltiplas versões do Node.js:
          </p>
          <span>asdf plugin-add nodejs</span>
        </div>
        <div>
          <p>Agora instalaremos a versão 20.9.0:</p>
          <span>asdf install nodejs 20.9.0</span>
        </div>

        <div>
          <p>Basta definirmos essa versão como global:</p>
          <span>asdf global nodejs 20.9.0</span>
        </div>
      </div>
      <div>
        <h1>importante</h1>
        <p>Caso queira ver todas as versões do Node.js que o asdf pode gerenciar/instalar, execute no terminal:</p>
        <span>asdf list all nodejs</span>
        <div>
          <h1>Caso queria ver as versões instaladas na sua máquina:</h1>
          <span>asdf list nodejs</span>
        </div>
      </div>
      <div>
        <p>Por fim, basta executarmos o seguinte comando no terminal:</p>
        <span>asdf reshim</span>
      </div>
      <div>
        <p>Agora, ao verificarmos qual a versão do Node.js, ele deve nos retornar v20.9.</p>
        <span>node -v</span>
      </div>
    </div>
    
  );
}

export default App;
