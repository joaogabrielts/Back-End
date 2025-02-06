function App() {
  return (
    <div>
      <h1>1 Introdução</h1>
      <p>
        Nesta aula, vamos explorar a biblioteca Helmet e como ela pode ser usada
        para melhorar a segurança das aplicações Express. O Helmet é um conjunto
        de middlewares que ajuda a prevenir uma variedade de ataques comuns,
        como Cross-Site Scripting (XSS), Injeção de Cabeçalho, Clickjacking e
        outros.
      </p>

      <h1>2 Instalando o Helmet</h1>
      <h4>npm install helmet</h4>

      <div>
        <h1>4 Funcionalidades do Helmet</h1>
        <ol>
          <li>
            <h4>X-DNS-Prefetch-Control:</h4>
            <p>
              Desativa pré-buscas de DNS para melhorar a privacidade e o
              desempenho.
            </p>
          </li>
          <li>
            <h4>X-Frame-Options:</h4>
            <p>
              Impede ataques de Clickjacking ao controlar como a página pode ser
              incorporada em um frame.
            </p>
          </li>
          <li>
            <h4>Content-Security-Policy:</h4>
            <p>Ajuda a mitigar ataques de Cross-Site Scripting (XSS) controlando de onde os recursos podem ser carregados.</p>
          </li>
          <li>
            <h4>X-Content-Type-Options:</h4>
            <p>Define o cabeçalho X-Content-Type-Options para evitar que os navegadores MIME-sniffem tipos de conteúdo.</p>
          </li>
          <li>
            <h4>Strict-Transport-Security:</h4>
            <p>Força a conexão segura (HTTPS) e previne ataques de interceptação.</p>
          </li>
          <li>
            <h4>X-Permitted-Cross-Domain-Policies:</h4>
            <p>Controla como o conteúdo pode ser compartilhado em domínios diferentes.</p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default App;
