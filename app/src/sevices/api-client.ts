import axios, { AxiosInstance } from 'axios';

const Api: AxiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_DOMAIN}/${process.env.REACT_APP_BASE_API}`
});

export default Api;