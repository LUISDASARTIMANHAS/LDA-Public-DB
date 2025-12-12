// src/components/ServerList.jsx
import ServerCard from "./ServerCard.jsx";

export default function ServerList({ servers }) {
	return (
		<div className="container mt-4">
			<div className="row g-3">
				{servers.map((s) => (
					<div key={s} className="col-12 col-md-6 col-lg-4">
						<ServerCard address={s} />
					</div>
				))}
			</div>
		</div>
	);
}
