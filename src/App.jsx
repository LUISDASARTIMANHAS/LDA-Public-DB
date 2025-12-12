import { motion } from "framer-motion";
import Header from "./components/Header.jsx";
import ServerList from "./components/ServerList.jsx";
import "./styles/global.css";

export default function App() {
  const servers = [
    "ip6-lda-srv1.duckdns.org:5432",
    "pinguinho.ddns.net:5432",
    "pinguinho.ddns.net:5432",
    "point-nashville.gl.at.ply.gg:27806",
    "147.185.221.31:27806",
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
