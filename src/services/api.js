import axios from 'axios';

export default async function getData() {
    const index = generateIndex();
    const urlArr = index.map((index) => axios.get(`https://rickandmortyapi.com/api/character/${index}`));
    const Response = await Promise.all(urlArr);
    return Response.map((curr) => {
        return {
            name: curr.data.name,
            image: curr.data.image,
            id: curr.data.id,
        };
    });
}

function generateIndex() {
    const index = new Set();
    do {
        index.add(Math.floor(Math.random() * 200) + 1);
    } while (index.size < 9);
    return [...index];
}
