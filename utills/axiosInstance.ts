import axios from "axios";
export const axiosInstance = axios.create({
    baseURL: "https://moviedatabasev1.vercel.app/api/v1",
});