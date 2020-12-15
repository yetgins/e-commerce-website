import axios from 'axios';

export default axios.create({
    baseURL: 'https://5fc63ba84931580016e3cc57.mockapi.io/api',
    headers: {
        'Content-type': 'application/json'
    }
});