import axios from 'axios';

export const api  = axios.create({
    baseURL: process.env.BASEURL,
    headers: {
        apikey: process.env.APIKEY,
        authorization: process.env.AUTHORIZATION
    }
})