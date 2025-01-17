import axios from "axios";

// Crear instancia de Axios
const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL, // Base URL desde las variables de entorno
});

// Agregar un interceptor para incluir el token en el header Authorization
axiosInstance.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Redirigir al login si la respuesta es no autorizada
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
