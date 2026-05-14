import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/card/card';
import getData from './services/api.js';
export default function App() {
    const [data, updateData] = useState([]);
    useEffect(() => {
        async function loadData() {
            const dataArr = await getData();
            updateData(dataArr);
        }
        loadData();
    }, []);
    if (data.length !== 0) console.log(data);
    return (
        <div className="app">
            <Card />
        </div>
    );
}
