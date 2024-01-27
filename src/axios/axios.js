import axios from 'axios';
import {baseUrl} from '../constants/Constants.js';

const axiosInstance = axios.create({
    baseURL: baseUrl
});

export default axiosInstance;