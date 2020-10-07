import axios from 'axios';
import qs from 'qs';

const HTTP = axios.create({
    baseURL: "/miaov",
    withCredentials: true,
    transformRequest:(data)=>{
        return qs.stringify(data)
    }
});

export default HTTP;
