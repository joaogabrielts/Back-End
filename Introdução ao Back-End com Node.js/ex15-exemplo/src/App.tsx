function App() {
  return (
    <div>
      <ol>
        <li>
          <h1>Introdução</h1>
          <p>
            Nesta aula, estaremos aprendendo sobre um recurso essencial de
            Typescript quando estamos lidando com objetos, a interface.
          </p>
        </li>
        <li>
          <h1>O que é?</h1>
          <p>
            Em TypeScript, uma interface é uma forma de definir a estrutura de
            um objeto ou classe. Ela define um contrato que especifica quais
            propriedades (atributos) e métodos um objeto deve ter. As interfaces
            são usadas para definir a forma dos objetos e garantir que os
            objetos que implementam essa interface cumpram esses requisitos.
          </p>
          <p>
            Vale dizer que as interfaces serão parte fundamental da programação
            orientada a objetos (POO) que conheceremos no decorrer do curso.
          </p>
          <h2>2.1 Exemplificando</h2>
          <span>o codigo de exemplo esta comentado</span>
          <p>Esta interface, descreve um objeto de usuário e pode ser associada da mesma maneira que os tipos básicos.</p>
          <span>o codigo de exemplo esta comentado</span>
          <span>o codigo de exemplo esta comentado</span>
          <div>
            <h1>2.2 Relacionando interfaces para descrever objetos aninhados</h1>
            <p>Interfaces aninhadas, também conhecidas como interfaces internas ou interfaces dentro de interfaces, são interfaces que são definidas dentro de outras interfaces no TypeScript. Elas são úteis quando você precisa organizar e estruturar suas interfaces de forma hierárquica e modular.</p>

            <p>Confira o exemplo abaixo:</p>
            <span>o codigo de exemplo esta comentado</span>

            <p>Neste exemplo relacionamos a interface IModule com a chave module em IUser. Estes relacionamentos podem tornar seu código mais legível e enxuto, especialmente quando você está lidando com objetos complexos com várias camadas de propriedades.</p>
          </div>
          <div>
            <h2>2.2.1 Listas de objeto</h2>
            <p>Vale adicionar, que, assim como os tipos básicos, podemos adicionar a marca [] para representarmos listas de objeto.</p>
            <span>o codigo de exemplo esta comentado</span>
          </div>
        </li>
      </ol>
    </div>
  );
}
/* 
interface IUser{
    id: number;
    name: string;
    email: string;
    module: string;
}



export const user: IUser = { id: 1, name: "Alex", email: "alex@kenzie.com.br"};

export const getUser = (user: IUser) => console.log(user);


interface IUser{
    id: number;
    name: string;
    email: string;
    module?: IModule;
}

interface IModule{
    name: string;
    skills: string[];
}




export const users: IUser[] = [{ id: 1, name: "Alex", email: "alex@kenzie.com.br"}];
*/

export default App;
