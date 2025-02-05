function App() {
  return (
    <div>
      <ol>
        <li>
          <h1>Introdução</h1>
          <p>
            Nesta aula, vamos aprender sobre o parâmetro res no Express, que é
            responsável por enviar respostas nas rotas da aplicação.
          </p>
        </li>
        <li>
          <h1>O parâmetro res</h1>
          <p>
            O parâmetro res, abreviação de "response", é fundamental para
            construir e enviar respostas às requisições recebidas pelo servidor.
            Ele permite que nossa aplicação envie dados de diferentes tipos como
            resposta ao cliente que fez a requisição.
          </p>
          <div>
            <h1>2.1 send</h1>
            <p>
              O método send emite respostas simples, geralmente em formato de
              texto.
            </p>
            <h4>
              Curiosidade: este modelo de resposta é capaz de processar HTML e
              pode ser encontrado com essa finalidade e aplicações monolíticas
            </h4>
          </div>
          <div>
            <h4>2.2 json</h4>
            <p>
              O método json converte o objeto JavaScript passado como argumento
              em uma resposta JSON e a envia de volta para o cliente que fez a
              requisição.
            </p>
            <p>exemplo no codigo</p>
          </div>
        </li>
        <li>
          <h1>Status Code</h1>
          <p>
            Para tornar nossas respostas mais semânticas, podemos apontar na
            resposta um Status Code, utilizando o método status.
          </p>
          <p>
            Abaixo, segue uma lista resumida dos Status Code mais utilizados:
          </p>
          <ul>
            <li>
              <p>
                200 - OK - Para requisições bem sucedidas, é o mais genérico dos
                status de sucesso
              </p>
            </li>
            <li>
              <p>201 - Created - Para requisições bem sucedidas de criação</p>
            </li>
            <li>
              <p>
                204 - No Content - Para requisições bem sucedidas sem um corpo
                de resposta
              </p>
            </li>
            <li>
              <p>
                400 - Bad Request - Para requisições mal sucedidas, como erros
                previstos em nossa aplicação, é o mais genérico dos status de
                falha
              </p>
            </li>
            <li>
              <p>
                401 - Unauthorized - Para requisições mal sucedidas, onde houve
                falha na autenticação
              </p>
            </li>
            <li>
              <p>
                404 - Not Found - Para requisições mal sucedidas, onde
                determinado recurso ou rota não foi encontrado
              </p>
            </li>
            <li>
              <p>
                500 - Internal Server Error - Para erros não previstos na nossa
                aplicação
              </p>
            </li>
          </ul>
          <p>Exemplo de uso de Status Code:</p>
          <p>exemplo no codigo</p>
        </li>
        <li>
          <h1>Return</h1>
          <p>É uma prática recomendada anteceder a execução do res com um return, como mostrado abaixo. Isso é importante para evitar a execução de instruções após a resposta, o que pode ser problemático ao lidar com exceções nas próximas aulas.</p>
          <p>exemplo no codigo </p>
          <p>Ficará mais claro entender esta necessidade quando começaremos a trabalhar com exceções nas aulas mais a frente.</p>
        </li>
      </ol>
    </div>
  );
}
/*
res.json({ message: "Criação realizada com sucesso!"})
---------------------------------------------------------
res.status(201).json({ message: "Criação realizada com sucesso!"});
------------------------------------------------------------------------

return res.status(201).json({ message: "Criação realizada com sucesso!"});


*/


export default App;
