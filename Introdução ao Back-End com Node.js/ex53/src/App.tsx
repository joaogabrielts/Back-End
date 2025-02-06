function App() {
  return (
    <div>
      <h1>Introdução</h1>
      <p>
        Nesta aula, vamos explorar a importância da segurança em aplicações
        Express e como prevenir vulnerabilidades comuns listadas no Projeto
        OWASP (Open Web Application Security Project). A segurança é um aspecto
        crucial para garantir a integridade, a confidencialidade e a
        disponibilidade dos dados em suas aplicações web.
      </p>

      <h1>Projeto OWASP</h1>
      <ul>
        <li>
          O Projeto OWASP é uma comunidade dedicada a melhorar a segurança de
          software.
        </li>
        <li>
          Ele fornece uma lista das dez principais vulnerabilidades de segurança
          em aplicações web, conhecida como "OWASP Top Ten".
        </li>
      </ul>
      <h1>Prevenção de Vulnerabilidades</h1>
      <ol>
        <li>
          <h4>Injeção (Injection):</h4>
          <ul>
            <li>
              <p>
                Não confie em dados não confiáveis, como entrada do usuário.
              </p>
            </li>
            <li>
              <p>
                Use parâmetros preparados (prepared statements) para consultas
                SQL e evite a concatenação direta de valores.
              </p>
            </li>
          </ul>
        </li>
        <li>
          <h4>
            Quebra de Autenticação e Gerenciamento de Sessões (Broken
            Authentication & Session Management):
          </h4>
          <ul>
            <li>
              <p>Use bibliotecas de autenticação seguras.</p>
            </li>
            <li>
              <p>
                Implemente políticas de senha fortes, autenticação de dois
                fatores e controle de sessão.
              </p>
            </li>
          </ul>
        </li>
        <li>
          <h4>Exposição de Dados Sensíveis (Sensitive Data Exposure):</h4>
          <ul>
            <li>
              <p>
                Proteja informações sensíveis, como senhas e dados pessoais, por
                meio de criptografia.
              </p>
            </li>
            <li>
              <p>Use protocolos seguros (HTTPS) para transmitir informações.</p>
            </li>
          </ul>
        </li>
        <li>
          <h4>Entidades XML Externas (XML External Entities - XXE):</h4>
          <ul>
            <li>
              <p>Desabilite processamento de entidades externas em XML.</p>
            </li>
            <li>
              <p>Utilize bibliotecas que protegem contra ataques XXE.</p>
            </li>
          </ul>
        </li>
        <li>
          <h4>Quebra de Acesso a Diretórios (Broken Access Control):</h4>
          <ul>
            <li>
              <p>
                Implemente controle de acesso adequado para garantir que
                usuários não autorizados não acessem recursos restritos.
              </p>
            </li>
            <li>
              <p>Valide todas as requisições e autorizações.</p>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <h4>Cross-Site Scripting (XSS):</h4>
            <li>
              <p>Valide e sanitize todos os dados de entrada do usuário.</p>
            </li>
            <li>
              <p>Use bibliotecas que previnem XSS, como Helmet.</p>
            </li>
          </ul>
        </li>
        <li>
          <h4>Cross-Site Request Forgery (CSRF):</h4>
          <ul>
            <li>
              <p>Utilize tokens CSRF para validar as requisições.</p>
            </li>
            <li>
              <p>
                Implemente cabeçalhos HTTP apropriados, como SameSite, para
                proteger contra CSRF.
              </p>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <h4>Componentes Inseguros (Security Misconfiguration):</h4>
            <li>
              <p>Mantenha sistemas e bibliotecas atualizados.</p>
            </li>
            <li>
              <p>
                Configure de forma segura servidores, bancos de dados e outros
                componentes.
              </p>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <h4>
              Redirecionamento e Encaminhamento Inseguros (Insecure Redirection
              & Forwarding):
            </h4>
            <li>
              <p>Valide e sanitize URLs antes de redirecionar o usuário.</p>
            </li>
            <li>
              <p>
                Evite redirecionamentos abertos e encaminhamentos não
                autenticados.
              </p>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <h4>Deserialização Insegura (Insecure Deserialization):</h4>
            <li>
              <p>
                Utilize objetos serializados de forma segura, evitando executar
                código malicioso.
              </p>
            </li>
            <li>
              <p>Valide e sanitize dados recebidos de entrada.</p>
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
}

export default App;
