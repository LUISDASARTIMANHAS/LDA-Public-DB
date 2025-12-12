import { motion } from "framer-motion";
import { useState } from "react";

/**
 * @param {Object} props
 * @param {string} props.address - endereço do servidor
 * @return {JSX.Element}
 */
export default function ServerCard({ address }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
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
      <span className="copy-status">
        {copied ? "Copiado!" : "Clique para copiar"}
      </span>
    </motion.div>
  );
}
