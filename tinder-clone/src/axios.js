import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinder-clone-backend-rory.herokuapp.com/',
});

export default instance;