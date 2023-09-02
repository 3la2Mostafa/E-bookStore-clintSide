import { default as axiosroot } from 'axios'


const axios = axiosroot.create({
    baseURL: "https://alef-server.onrender.com"
})

export default axios;