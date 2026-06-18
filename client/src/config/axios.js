import axios from "axios";

const axiosInstance = axios.create({
	baseURL: `${import.meta.env.VITE_API_URL}`,
	withCredentials: true,
});

export default axiosInstance;

axiosInstance.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalReq = error.config;
		if (!error.response) {
			return Promise.reject(error);
		}

		if (
			error.response.status === 401 &&
			!originalReq._retry &&
			!originalReq.url.includes("/api/auth/refresh")
		) {
			originalReq._retry = true;

			try {
				await axiosInstance.post("/api/auth/refresh");
				return axiosInstance(originalReq);
			} catch (refreshError) {
				return Promise.reject(refreshError);
			}
		}
	},
);
