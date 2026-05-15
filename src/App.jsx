import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/card/card.jsx';
import getData from './services/api.js';
export default function App() {
    const [data, updateData] = useState([]);
    const [score, updateScore] = useState({ currScore: 0, bestScore: 0 });
    const [clickedCards, updateClicked] = useState(new Set());
    useEffect(() => {
        async function loadData() {
            const dataArr = await getData();
            updateData(dataArr);
        }
        loadData();
    }, []);
    function handleClick(id) {
        const scoreBoard = { currScore: score.currScore, bestScore: score.bestScore };
        let clicked = new Set(clickedCards);
        if (clicked.has(id)) {
            scoreBoard.currScore = 0;
            clicked.clear();
        } else {
            scoreBoard.currScore = scoreBoard.currScore + 1;
            clicked.add(id);
        }
        if (scoreBoard.currScore > scoreBoard.bestScore) scoreBoard.bestScore = scoreBoard.currScore;
        updateClicked(clicked);
        updateScore(scoreBoard);
        updateData(shuffle([...data]));
    }
    if (data.length === 0) return <div className="loading">Loading...</div>;

    return (
        <div className="app">
            <div className="header">
                <div className="game-name">
                    <h1>Memory Game</h1>
                </div>
                <div className="instructions">
                    <h2>How to Play</h2>
                    <p>Click a unique card to earn points.</p>
                    <p>After every click, the cards shuffle into a new order.</p>
                    <p>Don’t click the same card twice — your current score will reset.</p>
                    <p>Try to beat your best score!</p>
                </div>
                <div className="score-board">
                    <div className="curr-score">Current Score:{score.currScore}</div>
                    <div className="best-score">Best Score:{score.bestScore}</div>
                </div>
            </div>
            <div className="card-grid">
                {data.map((currCard) => {
                    return <Card key={currCard.id} data={currCard} onClick={() => handleClick(currCard.id)} />;
                })}
            </div>
        </div>
    );
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[random]] = [arr[random], arr[i]];
    }
    return arr;
}
