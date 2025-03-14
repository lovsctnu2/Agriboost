import axios from "axios";
import Cookies from 'js-cookie';

const Https = axios.create({
    baseURL: "https://be-intern.bccdev.id/agung/api",
    headers: {
        "Content-Type": "application/json",
    },
});

Https.interceptors.request.use(
    (config) => {
        const token = Cookies.get("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

Https.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
);

export default Https;