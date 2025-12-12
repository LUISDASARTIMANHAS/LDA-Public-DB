import ServerCard from "./ServerCard.jsx";
import "../styles/grid.css";

export default function ServerList({ servers }) {
	return (
		<div className="grid">
			{servers.map((s) => (
				<ServerCard key={s} address={s} />
			))}
		</div>
	);
}
