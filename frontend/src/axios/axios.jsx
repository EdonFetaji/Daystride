import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE || "http://localhost:8000/api/",
    headers: {
        "Content-Type": "application/json",
    },
});

// Attach token to request headers
axiosInstance.interceptors.request.use(
    (config) => {
        const stored = localStorage.getItem("tokens");
        if (stored) {
            try {
                const {access} = JSON.parse(stored);
                if (access) {
                    config.headers.Authorization = `Bearer ${access}`;
                }
            } catch (err) {
                console.error("Failed to parse tokens:", err);
            }
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Global response error handler
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        const status = error.response?.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem("tokens");
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
