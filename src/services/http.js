import axios from 'axios';

const API_BASEURL = 'https://polls.apiblueprint.org/';

const options = {
  baseURL: API_BASEURL,
  headers: {
    Accept: 'application/json',
  },
};

const instance = axios.create(options);

export default instance;
