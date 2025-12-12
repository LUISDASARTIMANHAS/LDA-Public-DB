// App.jsx
import { motion } from "framer-motion";
import Header from "./components/Header.jsx";
import ServerList from "./components/ServerList.jsx";

export default function App() {
  const servers = [
    {
      address: "ip6-lda-srv1.duckdns.org:5432",
      user: "lda-srv1",
      pass: "XRWHo9tA6xAVdQcwNcHXdqN89XgVBQ2d"
    },
    {
      address: "pinguinho.ddns.net:5432",
      user: "pinguinho",
      pass: "HSHk2H7eDZWUcu4yNAPQAwtq5xgKwEPb"
    },
    {
      address: "point-nashville.gl.at.ply.gg:27806",
      user: "point-nashville",
      pass: "qN3WKfVysmhVZamLEWYaqXDVX2DoVtCA"
    },
    {
      address: "147.185.221.31:27806",
      user: "147-185-221-31",
      pass: "v7nu4McMoPyPobSiA2c3XNfBd3kzG6ZM"
    }
  ];

  return (
    <div>
      <Header />

      <main style={{ textAlign: "center", marginTop: "60px", padding: "20px" }}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Banco de Dados Público Simplificado
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          style={{ maxWidth: "600px", margin: "20px auto", opacity: 0.8 }}
        >
          Concentre-se no desenvolvimento. Nós cuidamos da infraestrutura.
          MongoDB, PostgreSQL e futuramente MySQL totalmente prontos para uso.
        </motion.p>

        <ServerList servers={servers} />
      </main>
    </div>
  );
}
