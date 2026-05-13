import { useState, useEffect } from 'react';
import getData from './services/api.js';
import './App.css';
export default function App() {
    let [newData, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const data = await getData();
            setData(data);
        }
        fetchData();
    }, []);
    console.log(newData);
    return (
        <>
            <h1>Hello world!</h1>
        </>
    );
}
