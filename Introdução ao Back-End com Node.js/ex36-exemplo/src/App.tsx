function App() {
  return (
    <div>
      <ol>
        <li>
          <h1> Introdução</h1>
          <p>
            Nesta aula, vamos explorar os conceitos básicos do Express,
            começando pela instância de uma aplicação e a criação da nossa
            primeira rota de API.
          </p>
        </li>
        <li>
          <h1>Mão na massa</h1>
          <p>
            Para começar a utilizar o Express, o primeiro passo é importar a
            função principal do Express e instanciar uma aplicação em uma
            variável (ou constante) da seguinte forma:
          </p>
          <span>Exemplo esta no codigo</span>
          <p>
            Através dessa instância, teremos acesso a todos os recursos
            oferecidos pelo Express.
          </p>
          <div>
            <h2>2.1 Listen</h2>
            <p>
              Para iniciar a nossa aplicação, utilizamos o método app.listen,
              que recebe dois parâmetros:
            </p>
            <ul>
              <li>
                <p>
                  port - A porta na qual a aplicação será iniciada. Por
                  convenção, utilizamos a porta 3000, mas qualquer porta pode
                  ser utilizada.
                </p>
              </li>
              <li>
                <p>
                  callback - Como segundo parâmetro, podemos fornecer uma
                  função. Neste exemplo inicial, utilizamos essa função para
                  notificar que a aplicação foi iniciada com sucesso.
                </p>
              </li>
              <span>Exemplo esta no codigo</span>
            </ul>
          </div>
          <div>
            <h2>2.2 Processando JSON</h2>
            <p>
              Em APIs REST, é comum lidar com dados no formato JSON, tanto na
              recepção quanto na entrega de conjuntos de valores. Portanto, uma
              boa prática é configurar nossa aplicação para processar JSON. Para
              isso, utilizamos a seguinte instrução no arquivo principal:
            </p>
            <span>Exemplo esta no codigo</span>
            <p>
              Essa instrução faz com que qualquer JSON fornecido para nossa API
              seja convertido em valores que o JavaScript/TypeScript é capaz de
              interpretar. Funciona de forma semelhante ao JSON.parse, mas de
              forma mais global.
            </p>
          </div>
          <div>
            <h1>2.3 Criando minha primeira rota</h1>
            <p>
              O Express nos permite criar rotas na nossa API com facilidade.
              Podemos seguir a dinâmica dos verbos HTTP para criar rotas de
              POST, GET, PUT, PATCH e DELETE. Cada um desses métodos possui uma
              função correspondente no objeto app.
            </p>
            <span>Exemplo esta no codigo</span>
            <p>O método get recebe dois parâmetros neste exemplo:</p>
            <ul>
              <li>
                <p>O endereço da rota (URL)</p>
              </li>
              <li>
                <p>A instrução a ser executada na rota</p>
              </li>
            </ul>
          </div>
          <p>
            Observe a existência dos parâmetros req e res, que são fornecidos
            pelo próprio Express. Vamos explicar mais sobre esses parâmetros nas
            próximas aulas.
          </p>
          <p>
            Combinando todos esses elementos, teremos nossa primeira API
            funcionando. Ao rodar o comando npm run dev, se tudo estiver
            configurado corretamente, você poderá acessar o endereço
            http://localhost:3000 com o método GET e verá a resposta "Olá
            mundo!".
          </p>
        </li>
      </ol>
    </div>
  );
}

/*
import express from "express";

const app = express();

---------------------------------------------------------------

const port = 3000;

app.listen(port, () => {
    console.log(`API sucessfully started on port ${port}`);
})
------------------------------------------------------------------

 import { json } from "express";

app.use(json());
--------------------------------------------------------------------

app.get("/", (req: Request, res: Response) => {
    res.send("Olá mundo!");
})
*/

export default App;
