import { motion } from "framer-motion";
import { useState } from "react";

/**
 * @param {Object} props
 * @param {string} props.address
 * @param {number} props.port
 * @param {string} props.user
 * @param {string} props.pass
 * @return {JSX.Element}
 */
export default function TutorialCard({ address, port, user, pass }) {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		const fullText = `Host: ${address}\nPort: ${port}\nUser: ${user}\nPass: ${pass}\nDatabase: postgres`;
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
			<h5 className="card-title mono">{address}</h5>
			<p className="mb-1"><strong>Port:</strong> {port}</p>
			<p className="mb-1"><strong>User:</strong> {user}</p>
			<p className="mb-1"><strong>Pass:</strong> {pass}</p>

			<span
				className="copy-status position-absolute"
				style={{ bottom: "10px", right: "10px", fontSize: "12px", color: "#00eaff" }}
			>
				{copied ? "Copiado!" : "Clique para copiar"}
			</span>
		</motion.div>
	);
}
