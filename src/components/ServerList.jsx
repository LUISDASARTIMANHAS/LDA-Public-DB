import ServerCard from "./ServerCard.jsx";

export default function ServerList({ servers }) {
  return (
    <div className="container">
      <div className="row">
        {servers.map((s) => (
          <div
            key={s.address}
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
          >
            <ServerCard
              address={s.address}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
