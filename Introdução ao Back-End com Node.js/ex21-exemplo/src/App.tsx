function App() {
  return (
    <div>
      <ol>
        <li>
          <h1>Introdução</h1>
          <p>
            Nesta aula, abordaremos um recurso que permite criar variáveis e
            métodos no interior das classes sem a necessidade de instâncias.
            Esse recurso é conhecido como static.
          </p>
        </li>
        <li>
          <h1> O que é?</h1>
          <p>
            No TypeScript, a palavra-chave "static" é usada em classes para
            criar membros (variáveis e métodos) que pertencem à classe como um
            todo, em vez de pertencerem a instâncias individuais da classe. Isso
            significa que é possível acessar membros estáticos diretamente na
            classe, sem a obrigação de criar uma instância da mesma. Veja o
            exemplo a seguir:
          </p>
          <span>exemplo esta no codigo </span>
          <p>
            Ao prefixar uma variável ou método com "static", é possível fazer
            referência a eles da seguinte maneira (sem criar instâncias):
          </p>
          <p>ProductList.addProduct("Computador");</p>
          <p>ProductList.getProducts();</p>
          <h3>Vale ressaltar que as variáveis, ao contrário do modelo de instâncias, terão o mesmo valor, independentemente de onde forem referenciadas.</h3>
        </li>
      </ol>
    </div>
  );
}
/*
export class ProductList{
    static productList: string[] = [];

    static addProduct(product: string){
        this.productList.push(product);
    }

    static getProducts(){
        console.log(this.productList);
    }
}
*/
export default App;
