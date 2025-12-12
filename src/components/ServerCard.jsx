import { motion } from "framer-motion";

export default function ServerCard({ address }) {
	return (
		<motion.div
			className="card"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			onClick={() => navigator.clipboard.writeText(address)}
		>
			<p style={{ fontFamily: "monospace" }}>{address}</p>
			<span style={{ fontSize: "12px", color: "#4CAF50" }}>
				Clique para copiar
			</span>
		</motion.div>
	);
}
