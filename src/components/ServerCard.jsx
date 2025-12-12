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
      className="card bg-dark text-white h-100 p-3"
      onClick={handleCopy}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      style={{ cursor: "pointer", position: "relative" }}
    >
      <p className="mono">{address}</p>
      <span
        className="copy-status position-absolute"
        style={{ bottom: "10px", right: "10px", fontSize: "12px", color: "#00eaff" }}
      >
        {copied ? "Copiado!" : "Clique para copiar"}
      </span>
    </motion.div>
  );
}