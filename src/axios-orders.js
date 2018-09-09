import axios from 'axios';

const instance = axios.create({
  baseUrl: 'https://burger-builder-b2c43.firebaseio.com/'
})

export default instance;
