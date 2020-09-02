import axios from 'axios';
import qs from 'qs';

import { getToken } from './auth';

const service = axios.create({
    baseURL: '/api',
    timeout: 40000,
    //responseType: 'json',
    withCredentials: false,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    }
})

// 设置请求拦截器
service.interceptors.request.use(req=>{
    if (getToken() !== undefined) {
        req.headers['Authorization'] = getToken();
    }
    if (req.method === 'post') {
        Object.assign(req.data, {_t: Date.parse(new Date()) / 1000})
        let Postdata = qs.stringify(req.data);
        req.data = Postdata;
    } else if (req.method === 'get') {
        req.params = {
            _t: Date.parse(new Date()) / 1000,
            ...req.params
        }
    } else if (req.method === 'put') {
        Object.assign(req.data, {_t: Date.parse(new Date()) / 1000})
        let Putdata = qs.stringify(req.data);
        req.data = Putdata;
    }
    return req
}, function (error) {
    return Promise.reject(error);
})

// 设置响应拦截器
service.interceptors.response.use(res=>{
    return res.data;
}, function (error) {
    return Promise.reject(error);
})

export default service;