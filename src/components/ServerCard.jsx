// ServerCard.jsx
import { motion } from "framer-motion";
import { useState } from "react";

/**
 * @param {Object} props
 * @param {string} props.address
 * @param {string} props.user
 * @param {string} props.pass
 * @return {JSX.Element}
 */
export default function ServerCard({ address, user, pass }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const fullText = `Host: ${address}\nUser: ${user}\nPass: ${pass}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <motion.div
      className="card"
      onClick={handleCopy}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <p className="mono">{address}</p>

      <div className="db-info">
        <p>
          <strong>Usuário:</strong> {user}
        </p>
        <p>
          <strong>Senha:</strong> {pass}
        </p>
      </div>

      <span className="copy-status">
        {copied ? "Copiado!" : "Clique para copiar"}
      </span>
    </motion.div>
  );
}
