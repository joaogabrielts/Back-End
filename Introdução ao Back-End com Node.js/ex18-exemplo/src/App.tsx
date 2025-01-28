function App() {
  return (
    <div>
      <ol>
        <li>
          <h1>Introdução</h1>
          <p>
            Nesta aula, vamos dar um mergulho mais profundo em TypeScript e
            aprender como declarar e utilizar classes, sendo a base da
            Programação Orientada a Objetos (POO). As classes nos permitem criar
            objetos com propriedades e comportamentos específicos, o que é
            essencial para a aplicação dos conceitos aprendidos anteriormente.
          </p>
        </li>
        <li>
          <h1>2 O que são classes?</h1>
          <p>
            Em TypeScript, da mesma forma que em outras linguagens de
            programação orientadas a objetos, as classes servem como uma maneira
            de criar modelos que representam entidades do mundo real ou
            conceitos abstratos. Elas atuam como uma espécie de "modelo-base" a
            partir do qual podemos instanciar objetos com atributos e
            funcionalidades específicos.
          </p>
          <div>
            <h1>2.1 Declarando uma classe</h1>
            <p>Para declararmos uma classe, basta seguir o modelo sintático abaixo:</p>

            <h2>codigo comitado no site</h2>

            <span>Numa classe, podemos encapsular variáveis e métodos.</span>
          </div>
          <div>
            <h2>2.2 Variáveis</h2>
            <p>Declaremos variáveis dessa forma no interior da classe, veja que diferentemente da abordagem convencional, variáveis não são prefixas com let, const ou var.</p>

            <h2>codigo comitado no site</h2>
          </div>
          <div>
            <h2>2.3 Métodos</h2>
            <p>Para declarar métodos dentro de uma classe, você deve seguir uma sintaxe específica. Observe no exemplo a seguir exposto que, assim como nas variáveis, não há o prefixo function nos métodos.</p>

            <h2>codigo comitado no site</h2>
          </div>
          <div>
            <h2>2.4 Instanciando uma classe</h2>
            <p>Conforme mencionado anteriormente, uma classe é, essencialmente, um "modelo-base" para um objeto. Portanto, para tornar uma classe concreta como um objeto e ser capaz de interagir com suas variáveis e métodos, é necessário criar uma instância.</p>

            <h2>codigo comitado no site</h2>
          </div>
        </li>
        <li>
          <h1>Dica</h1>
          <p>Podemos instanciar uma classe múltiplas vezes, e cada instância será individual e independente. Cada instância de uma classe representará um objeto separado com seu próprio estado e comportamento.</p>
        </li>
      </ol>
    </div>
  );
}
/*
class Person{

}


class Person{
    // Declaração de variável
    name: string = "Alex";
}



class Person{
    name: string = "Alex";

    // Declaração de método
    sayHello(message: string){
        console.log(message);
    }
}



const person = new Person();
console.log(person.name);
person.sayHello("Olá pessoal, me chamo Alex!");
*/

export default App;
