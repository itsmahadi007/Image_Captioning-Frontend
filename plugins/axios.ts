// This plugin returns today's date
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/'
})


export default defineNuxtPlugin(async (nuxtApp) => {
    nuxtApp.axiosInstance = axiosInstance;
});
