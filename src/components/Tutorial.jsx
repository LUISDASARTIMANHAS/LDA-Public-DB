import TutorialCard from "./TutorialCard.jsx";

/**
 * Lista de servidores e instruções
 * @return {JSX.Element}
 */
export default function Tutorial() {
  const servers = [
    {
      address: "ip6-lda-srv1.duckdns.org",
      port: 5432,
      user: "lda-srv1",
      pass: "XRWHo9tA6xAVdQcwNcHXdqN89XgVBQ2d"
    },
    {
      address: "pinguinho.ddns.net",
      port: 5432,
      user: "pinguinho",
      pass: "HSHk2H7eDZWUcu4yNAPQAwtq5xgKwEPb"
    },
    {
      address: "point-nashville.gl.at.ply.gg",
      port: 27806,
      user: "point-nashville",
      pass: "qN3WKfVysmhVZamLEWYaqXDVX2DoVtCA"
    },
    {
      address: "147.185.221.31",
      port: 27806,
      user: "147-185-221-31",
      pass: "v7nu4McMoPyPobSiA2c3XNfBd3kzG6ZM"
    }
  ];

  return (
    <section className="text-center mt-5 w-100">
      <h2 className="mb-4">Tutorial de Conexão PostgreSQL</h2>
      <p className="mx-auto mb-4" style={{ maxWidth: "600px", opacity: 0.8 }}>
        Conecte-se usando qualquer um dos logins públicos abaixo. Clique no card para copiar as informações.
      </p>

      <div className="container">
        <div className="row g-3 justify-content-center">
          {servers.map((s) => (
            <div key={s.address} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <TutorialCard
                address={s.address}
                port={s.port}
                user={s.user}
                pass={s.pass}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-5" style={{ maxWidth: "600px", textAlign: "left", opacity: 0.85 }}>
        <h3>Passos finais</h3>
        <p>Execute o comando abaixo no cliente PostgreSQL:</p>
        <pre>INSERT INTO registrar (nome) VALUES ('SEU_USUARIO');</pre>
        <p>Sua conta será criada automaticamente. Você poderá conectar-se usando:</p>
        <p><strong>User:</strong> SEU_USUARIO</p>
        <p><strong>Pass:</strong> senha cadastrada no site</p>
        <p>Para criar seu banco pessoal:</p>
        <pre>CREATE DATABASE seu_usuario;</pre>
      </div>
    </section>
  );
}
