import './card.css';

export default function Card({ data, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            <p>Card component</p>
        </div>
    );
}
