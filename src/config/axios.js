import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://adrixus-backend-api.herokuapp.com/',
});

export default instance;
