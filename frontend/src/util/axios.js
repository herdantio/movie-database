import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
})

axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';


export default instance