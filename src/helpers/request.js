import axios from 'axios';

export default axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/`,
  timeout: 1000,
  headers: {
    Authorization: 'Bearer {token}'
  }
})
