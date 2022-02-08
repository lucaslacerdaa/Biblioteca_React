import axios from "axios";

//Comunicação básica com a API

export const api = axios.create({
    baseURL: 'http://localhost:5000/api'
})