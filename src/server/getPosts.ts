import { Post } from "../interfaces/posts";

function randomRateGenerator() {
        return Math.floor(Math.random() * 51);
}

export const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json()
    data.map((item:Post) => {
        item.rate = 'none'
        item.likes = randomRateGenerator()
        item.dislikes = randomRateGenerator()
        return item
    })
    return data;
};

export default getPosts;