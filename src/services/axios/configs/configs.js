import axios from "axios";

const apiRequests = axios.create({
    baseURL: 'https://personal-portfolio-db.vercel.app'
})

export default apiRequests