function App() {
  return (
    <div>
      <ol>
        <li>
          <h1>Introdução</h1>
          <p>
            Nesta aula, vamos explorar um recurso importante da Programação
            Orientada a Objetos (POO): os níveis de acesso de métodos e
            variáveis dentro de uma classe.
          </p>
        </li>
        <li>
          <h1>Níveis de acesso</h1>
          <p>
            Os níveis de acesso são utilizados para determinar como uma variável
            ou método específico será compartilhado com outras classes ou
            disponibilizado dentro da instância da classe.
          </p>
          <div>
            <h2>2.1 Protected</h2>
            <p>
              O nível de acesso protected restringe o acesso ao recurso somente
              à instância da classe e permite seu compartilhamento por meio de
              herança.
            </p>
            <span>Exemplo de código esta no codigo </span>
          </div>
          <div>
            <h2>2.2 Private</h2>
            <p>
              O nível de acesso private restringe tanto o acesso à instância da
              classe quanto o compartilhamento por herança.
            </p>
            <span>Exemplo de código esta no codigo </span>
          </div>
          <div>
            <h1>2.3 Public</h1>
            <p>
              O nível de acesso public é o padrão para variáveis e métodos,
              permitindo que o recurso esteja presente na instância da classe e
              seja compartilhado por herança. Pode ser declarado implicitamente
              ou explicitamente como prefixo.
            </p>
            <span>Exemplo de código esta no codigo </span>
          </div>
        </li>
      </ol>
    </div>
  );
}

/*
protected variavel: string;
⁠
protected metodo(){
  
  }




  private variavel: string;
⁠
private metodo(){

}



// implicito:

variavel: string;
⁠
metodo(){

  }
  ⁠
  // explicito:
  ⁠
  public variavel: string;
  ⁠
  public metodo(){
  
  }
*/

export default App;
