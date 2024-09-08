import axios from "axios";
import {getToken} from "../utils/getToken";

const apiAxios = axios.create({
    baseURL: "https://e-commerce-backend-g2.onrender.com/"
});

apiAxios.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

apiAxios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export { apiAxios };
