import axios from "axios";

const apiRequests = axios.create({
    baseURL: 'http://localhost:3000'
})

export default apiRequests