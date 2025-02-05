function App() {
  return (
    <div>
      <ol>
        <li>
          <h1>Introdução</h1>
          <p>
            Nesta aula, vamos aprender sobre o parâmetro req do Express e suas
            subdivisões.
          </p>
        </li>
        <li>
          <h1>O parâmetro req</h1>
          <p>
            O parâmetro req existe para agrupar o conjunto de valores que vêm de
            origem externa para a nossa aplicação, por meio de requisições (por
            isso, é chamado de request). O parâmetro request é dividido em 4
            subdivisões:
          </p>
          <ul>
            <li>
              <p>
                req.body - objeto condensando todo o conjunto de dados fornecido
                no corpo da requisição
              </p>
            </li>
            <li>
              <p>
                req.headers - objeto condensando configurações da requisição e
                chaves de acesso
              </p>
            </li>
            <li>
              <p>
                req.params - objeto condensando parâmetros previstos da URL das
                rotas.
              </p>
            </li>
            <li>
              <p>
                req.query - objeto condensando parâmetros de busca (não
                previstos na URL das rotas)/
              </p>
            </li>
          </ul>
          <p>
            É por meio desses valores que conseguimos controlar a maioria das
            variações de comportamento em nossas rotas.
          </p>
          <div>
            <h1>2.1 Parâmetros de URL</h1>
            <p>
              Os parâmetros nas URLs das rotas, condensados em req.params, podem
              ser declarados da seguinte forma:
            </p>
            <span>exemplo no codigo </span>
            <p>
              Parâmetros deste tipo se tornam obrigatórios ao serem declarados e
              precisam ser fornecidos da seguinte forma:
            </p>
            <p>http://api.url/valordeexemplo</p>
          </div>
          <div>
            <h1>2.2 Parâmetros de busca (URL Search Params)</h1>
            <p>
              Os parâmetros de busca, condensados em req.query, não precisam ser
              declarados nas rotas do Express e geralmente costumam ser
              opcionais.
            </p>
            <p>Parâmetros deste tipo podem ser passados da seguinte forma:</p>
            <h4>Parâmetros deste tipo podem ser passados da seguinte forma:</h4>
          </div>
        </li>
      </ol>
    </div>
  );
}
/*
⁠⁠app.get("/:example", (req: Request, res: Response) => {
    /* req.params.example */
//  })
// */
export default App;
