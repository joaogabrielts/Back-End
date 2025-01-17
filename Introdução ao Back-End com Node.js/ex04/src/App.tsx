function App() {
  return (
    <>
      <div>
        <ol>
          <li>
            <h1> Introdução a Tipagem e TypeScript</h1>
            <p>
              {" "}
              TypeScript é uma linguagem de programação desenvolvida pela
              Microsoft que é uma extensão do JavaScript. Ele foi projetado para
              ser uma linguagem de código aberto, oferecendo uma série de
              recursos adicionais que não estão presentes no JavaScript padrão.
              O TypeScript é conhecido como uma linguagem de "tipagem estática
              opcional", o que significa que você pode adicionar tipos aos seus
              códigos, mas não é obrigatório. Ele é amplamente usado para
              desenvolvimento web e pode ser usado tanto no lado do cliente
              (front-end) quanto no lado do servidor (back-end).
            </p>
          </li>
          <li>
            <h1> Tipagem Estática e Dinâmica</h1>
            <p>
              A tipagem se refere à forma como as linguagens de programação
              lidam com os tipos de dados, ou seja, como determinam e tratam o
              tipo de valor que uma variável pode conter. Existem dois
              principais paradigmas de tipagem: estática e dinâmica.
            </p>
            <div>
              <h3>2.1 Tipagem Dinâmica</h3>
              <p>
                Definição: Em uma linguagem de programação com tipagem dinâmica,
                o tipo de uma variável é determinado em tempo de execução,
                podendo ser alterado durante a execução do programa.
              </p>
              <p>
                Exemplo: Linguagens de programação dinâmicas incluem Python,
                JavaScript e Ruby. Por exemplo, em JavaScript, uma variável pode
                começar contendo um número e depois ser atribuído a uma string
                sem qualquer erro de compilação.
              </p>
            </div>
            <div>
              <h3>2.2 Tipagem Estática</h3>
              <p>
                Definição: Em uma linguagem de programação com tipagem estática,
                o tipo de uma variável é determinado em tempo de compilação, e
                não pode ser alterado durante a execução do programa.
              </p>
              <p>
                Exemplo: Linguagens de programação estáticas incluem C, C++,
                Java e TypeScript. No TypeScript, por exemplo, você deve
                declarar o tipo de uma variável e, uma vez definido, não pode
                atribuir valores de tipos diferentes a essa variável.
              </p>
            </div>
            <div>
              <h3>2.3 Vantagens e Desvantagens</h3>
              <h4>Tipagem Estática:</h4>
              <div>
                <p>
                  Vantagens: Oferece segurança adicional ao evitar erros de tipo
                  em tempo de compilação, melhorando a robustez do código.
                </p>
                <p>
                  Desvantagens: Pode parecer mais restritiva, exigindo
                  declarações explícitas de tipos, o que pode aumentar a
                  quantidade de código.
                </p>
              </div>
              <h4>Tipagem Dinâmica:</h4>
              <div>
                <p>
                  Vantagens: Oferece flexibilidade, permitindo mudanças de tipos
                  durante a execução, o que pode simplificar a escrita inicial
                  de códig
                </p>
                <p>
                  Desvantagens: Pode resultar em erros inesperados de tipo em
                  tempo de execução, tornando depuração e manutenção mais
                  desafiadoras.
                </p>
              </div>
            </div>
          </li>
          <li>
            <h1> TypeScript e suas vantagens</h1>
            <p>
              O TypeScript oferece várias vantagens significativas em relação ao
              JavaScript puro:
            </p>

            <div>
              <h3>3.1 Verificação de Tipos Estáticos</h3>
              <p>
                Uma das principais vantagens do TypeScript é a capacidade de
                definir tipos estáticos para variáveis, funções e objetos. Essa
                tipagem estática permite que o compilador do TypeScript detecte
                erros de tipo em tempo de compilação, ajudando a evitar muitos
                erros comuns durante o desenvolvimento.
              </p>
            </div>
            <div>
              <h3>3.2 Melhor IDE Support</h3>
              <p>
                Devido à natureza tipada do TypeScript, os ambientes de
                desenvolvimento integrados (IDEs) podem fornecer suporte mais
                robusto para recursos como autocompletar, navegação de código,
                renomeação de variáveis e refatoração, tornando o
                desenvolvimento mais eficiente.
              </p>
            </div>
            <div>
              <h3>3.3 Maior Escalabilidade</h3>
              <p>
                O uso de tipos estáticos e interfaces no TypeScript torna o
                código mais escalável e de fácil manutenção. À medida que os
                projetos crescem, é mais fácil entender a estrutura do código e
                trabalhar em equipe sem conflitos de tipos.
              </p>
            </div>
            <div>
              <h3>3.4 Intellisense</h3>
              <p>
                O TypeScript fornece recursos de autocompletar, como
                Intellisense, que permitem que os desenvolvedores tenham acesso
                rápido à documentação e aos métodos disponíveis em um objeto,
                tornando a escrita do código mais rápida e precisa.
              </p>
            </div>
            <div>
              <h3>3.5 Facilidade na Refatoração</h3>
              <p>
                Devido à tipagem estática, é mais fácil fazer grandes mudanças
                em seu código, pois o TypeScript pode detectar automaticamente
                as alterações necessárias em várias partes do projeto durante a
                refatoração.
              </p>
            </div>
            <div>
              <h3>3.6 Suporte a Novos Recursos do ECMAScript</h3>{" "}
              <p>
                O TypeScript frequentemente acompanha as atualizações do
                ECMAScript (o padrão por trás do JavaScript) e fornece suporte
                para os recursos mais recentes antes que os navegadores possam
                implementá-los nativamente.
              </p>
            </div>
            <div>
              <h3>3.7 Compatibilidade com Ecossistema JavaScript</h3>{" "}
              <p>
                O TypeScript é um superconjunto do JavaScript, o que significa
                que você pode utilizar bibliotecas e frameworks existentes do
                ecossistema JavaScript sem nenhum problema. Isso permite que
                você adote gradualmente o TypeScript em projetos existentes.
              </p>
            </div>
            <div>
              <h3>3.8 Documentação e Legibilidade</h3>
              <p>
                A tipagem estática e o uso de interfaces no TypeScript tornam o
                código mais documentativo, facilitando a compreensão do código,
                mesmo para desenvolvedores que não o escreveram originalmente.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </>
  );
}

export default App;
