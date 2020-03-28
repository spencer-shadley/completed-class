import axios from 'axios';
const BASEURL = 'https://www.omdbapi.com/?t=';
const APIKEY = '&apikey=trilogy';

export default {
  search: query => axios.get(BASEURL + query + APIKEY)
};
