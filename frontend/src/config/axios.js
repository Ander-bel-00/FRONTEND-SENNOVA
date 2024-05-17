import axios from "axios";

const clienteAxios = axios.create({
    baseURL: 'https://api-sennova-c39312c87926.herokuapp.com/api',
    withCredentials: true,
});

// Configurar interceptor para incluir el token en las solicitudes
clienteAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Token ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default clienteAxios;