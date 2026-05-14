import './card.css';

export default function Card({ data }) {
    return (
        <div className="card">
            <div className="card-image" style={{ backgroundImage: `url(${data.image})` }}></div>
            <h2 className="card-title">{data.name}</h2>
        </div>
    );
}
