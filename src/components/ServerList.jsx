import ServerCard from "./ServerCard.jsx";

export default function ServerList({ servers }) {
	return (
		<div className="grid">
			{servers.map((s) => (
				<ServerCard key={s} address={s} />
			))}
		</div>
	);
}
