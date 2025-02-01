function App() {
  return (
    <div>
      <ol>
        <li>
          <h1> Introdução</h1>
          <p>
            Nesta aula, exploraremos um conceito poderoso da Programação
            Orientada a Objetos (POO) chamado "Herança". A herança permite que
            uma classe (subclasse) herde atributos e métodos de outra classe
            (superclasse). Essa abordagem promove a reutilização de código e a
            criação de hierarquias de classes, tornando o código mais organizado
            e fácil de manter.
          </p>
        </li>
        <li>
          <h1>O que é?</h1>
          <p>
            A herança é um conceito fundamental da POO em que uma classe pode
            herdar atributos e métodos de outra classe. A classe que herda é
            chamada de subclasse ou classe filha, enquanto a classe que é
            herdada é chamada de superclasse ou classe pai. Veja o exemplo
            abaixo:
          </p>
          <span>Exemplo no codigo</span>
          <p>
            No exemplo da vídeoaula, relacionamos as classes Person e Student da
            seguinte forma:
          </p>
          <span>Exemplo no codigo</span>
          <h3>Com isso, todas as variáveis e métodos presentes em Person foram compartilhados com a classe Student.</h3>
          <div>
            <h2>2.1 Super</h2>
            <p>Se a subclasse tiver um construtor, é necessário chamar o construtor da superclasse usando a palavra-chave super() antes de inicializar seus próprios atributos. Confira o exemplo abaixo:</p>
            <span>Exemplo no codigo</span>
            <p>Neste caso, foi repassado o parâmetro para a superclasse, executando "super" e fornecendo "name" como parâmetro.</p>
          </div>
        </li>
      </ol>
    </div>
  );
}

export default App;
/*class Superclasse {
  // Atributos e métodos da superclasse
}

class Subclasse extends Superclasse {
  // Atributos e métodos adicionais da subclasse
} 
--------------------------------------------------------------------------
export class Student extends Person{
}

------------------------------------------------------------
export class Student extends Person{
    module: string;

    constructor(name: string, module: string){
        super(name);
        this.module = module;
    }

    sayMyModule(){
        console.log(`Estou matriculado no módulo: ${this.module}`);
    }
}
*/
