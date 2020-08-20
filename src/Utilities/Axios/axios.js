import axios from 'axios';

export const axiosCall = axios.create({
   baseURL: 'https://disease.sh/v3/covid-19',
});