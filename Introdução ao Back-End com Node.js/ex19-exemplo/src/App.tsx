function App() {
  return (
    <div>
      <ol>
        <li>
          <h1>Introdução</h1>
          <p>
            Nesta aula, aprenderemos sobre o método construtor, que desempenha
            um papel crucial na definição do comportamento das instâncias de uma
            classe.
          </p>
        </li>
        <li>
          <h1>O que é?</h1>
          <p>
            Um método construtor de classe, comumente chamado de "construtor", é
            um método especial em uma classe de programação que é
            automaticamente acionado quando um objeto dessa classe é criado. Sua
            principal finalidade é inicializar os atributos (variáveis de
            instância) do objeto e executar outras configurações iniciais
            necessárias. É importante notar que, por meio do construtor, estamos
            criando uma mecânica para passagem de parâmetros para nossas
            classes. Veja o exemplo abaixo:
          </p>
          <span>Exemplo esta no codigo </span>
          <p>
            Declaramos o método construtor dessa forma e, neste exemplo, criamos
            um parâmetro name para associar à variável name no interior da
            classe.
          </p>
          <div>
            <h2>2.1 this</h2>
            <p>
              A palavra-chave "this" permite referenciar a própria classe no
              interior dos métodos, proporcionando acesso tanto aos métodos
              quanto às variáveis. Veja o exemplo abaixo:
            </p>
            <span>Exemplo esta no codigo </span>
            <p>
              Observe que, além de ser utilizado para referenciar a variável no
              método construtor, "this" também foi utilizado em console.log(`Me
              chamo ${this.name}`);. Com esse recurso, podemos relacionar
              variáveis e métodos de forma flexível.
            </p>
          </div>
        </li>
        <li>
          <h1>Conclusão</h1>
          <p>
            Nesta aula, aprendemos sobre o método construtor e sobre o uso da
            palavra-chave "this". Na próxima aula, continuaremos a explorar
            ainda mais o conceito de classes e programação orientada a objetos
            (POO). Para aprofundar seus conhecimentos, coloque em prática o que
            aprendeu nas atividades. Bom estudo!
          </p>
        </li>
      </ol>
    </div>
  );
}
/* 
class Person{
    name: string;

    constructor(name: string){
        this.name = name;
    }
}


class Person{
    name: string;

    constructor(name: string){
        this.name = name;
    }

    saySomething(message: string){
        console.log(message);
    }

    sayMyName(){
        console.log(`Me chamo ${this.name}`);
    }
}

*/

export default App;
