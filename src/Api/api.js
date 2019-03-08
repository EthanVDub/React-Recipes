import axios from 'axios';

const KEY = '73ac759e7d206bd52a9d95144c3a7f20';
const ID = '53e68d23';

export default axios.create({
  baseURL: 'https://api.edamam.com',
  params: {
    app_id: ID,
    app_key: KEY
  }
});