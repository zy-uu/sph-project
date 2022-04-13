import axios from 'axios'
import nprogress from 'nprogress';
import "nprogress/nprogress.css"


let mockRequests = axios.create({
    baseURL: '/mock',
    timeout: 5000,
})

mockRequests.interceptors.request.use(
    (config) => {
        nprogress.start();
        return config;
    }
)

mockRequests.interceptors.response.use(
    (res) => {
        nprogress.done();
        return res;
    },
    (err) => {
        alert("server fail")
    }
    
)

export default mockRequests;

