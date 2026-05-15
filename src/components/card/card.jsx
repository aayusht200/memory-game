export default function Card({ data, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            <img src={data.image} alt={data.name} className="card-image" />

            <p className="card-title">{data.name}</p>
        </div>
    );
}
