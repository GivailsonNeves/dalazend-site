
   
import axios, { AxiosInstance } from 'axios';

const Api: AxiosInstance = axios.create({
  // baseURL: `http://localhost:8080/wp-json/options/`
  baseURL: `http://phoenixhml.xyz/wp-json/options/`
});

export default Api;