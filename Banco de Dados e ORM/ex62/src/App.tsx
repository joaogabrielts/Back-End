function App() {
  return (
    <div>
      <ol>
        <li>
          <h1>Introdução</h1>
          <p>
            Nesta aula, aprenderemos sobre um conceito importante para o
            funcionamento das aplicações, o JSON Web Token
          </p>
        </li>
        <li>
          <h1> O que é?</h1>
          <p>
            JSON Web Token (JWT) é um padrão aberto (RFC 7519) que define uma
            maneira compacta e autossuficiente de representar informações entre
            duas partes. Essas informações podem ser verificadas e confiáveis,
            porque são assinadas digitalmente. JWTs podem ser assinados usando
            um segredo (com o algoritmo HMAC) ou um par de chaves
            pública/privada usando RSA ou ECDSA.
          </p>
          <p>Um JWT geralmente é uma string que é composta por três partes:</p>
          <ol>
            <li>
              <p>
                Cabeçalho (Header): Geralmente consiste em dois partes: o tipo
                do token, que é JWT, e o algoritmo de hash que está sendo usado,
                como HMAC SHA256 ou RSA.
              </p>
            </li>
            <li>
              <p>
                Payload: Contém as afirmações. As afirmações são declarações
                sobre uma entidade (geralmente, o usuário) e metadados
                adicionais. Existem três tipos de afirmações: reservadas,
                públicas e privadas. Exemplos de afirmações incluem informações
                sobre o usuário, permissões ou qualquer outra informação
                necessária.
              </p>
            </li>
            <li>
              <p>
                Assinatura: Para criar a assinatura, você precisa codificar o
                cabeçalho, o payload, e uma chave secreta (ou privada) com o
                algoritmo especificado no cabeçalho. O resultado é uma sequência
                de caracteres que pode ser anexada ao JWT.
              </p>
            </li>
          </ol>
        </li>
        <li>
          <h1>Quando utilizar?</h1>
          <p>O JWT é frequentemente usado para autenticação e troca segura de informações entre partes. Por exemplo, após o login bem-sucedido, um servidor pode gerar um JWT que contém as informações do usuário e enviá-lo para o cliente. O cliente pode então incluir esse token em cada solicitação subsequente para autenticar-se, permitindo que o servidor valide a identidade do usuário sem a necessidade de enviar credenciais a cada vez.</p>
          <h3>É importante observar que, embora os JWTs possam ser úteis para autenticação, eles não devem ser usados como a única medida de segurança, e a devida consideração deve ser dada à segurança da implementação, como o gerenciamento seguro de chaves e a prevenção de ataques como a falsificação de tokens (token spoofing).</h3>
        </li>
      </ol>
    </div>
  );
}

export default App;
