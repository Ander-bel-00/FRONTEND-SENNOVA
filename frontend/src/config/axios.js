import axios from "axios";

const clienteAxios = axios.create({
    baseURL: 'https://api-sennova-c39312c87926.herokuapp.com/api',
    withCredentials: true,
});

// Configurar interceptor para incluir el token en las solicitudes


export default clienteAxios;