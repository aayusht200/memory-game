import axios from 'axios';

export default function getData() {
    const charId = getRandomCharID();
    const dataSet =  charId.map((currId) =>await getCurrentData(currId));
    return dataSet;
}



async function getCurrentData(id) {
    try {
        const data = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        return { name: data.data.name, status: data.data.status, image: data.data.image };
    } catch (error) {
        console.log(error);
    }
}
function getRandomCharID() {
    const charId = new Set();
    do {
        charId.add(Math.ceil(Math.random(1) * 200));
    } while (charId.size < 10);
    return [...charId];
}