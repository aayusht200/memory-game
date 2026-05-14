import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/card/card.jsx';
import getData from './services/api.js';
export default function App() {
    const [data, updateData] = useState([]);
    const [score, updateScore] = useState({ currScore: 0, bestScore: 0 });
    useEffect(() => {
        async function loadData() {
            const dataArr = await getData();
            updateData(dataArr);
        }
        loadData();
    }, []);

    if (data.length == 0) return <div className="loading">Loading...</div>;

    return (
        <div className="app">
            <div className="card-grid">
                {data.map((currCard) => {
                    return <Card key={currCard.id} data={currCard} />;
                })}
            </div>
        </div>
    );
}
