import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-e-commerce-c1b8d.cloudfunctions.net/api'
    //'http://localhost:5001/e-commerce-c1b8d/us-central1/api'
    
});

export default instance;