import axios from 'axios'

const BASE_URL = '/';

export const publicRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Accept": "application/json; charset=utf8",
        "Content-Type": "application/json; charset=utf8",
    }
});