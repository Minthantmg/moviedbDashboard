import {axiosInstance} from "@/utills/axiosInstance";

export const getUserList = async () => {
    try {
        const res = await axiosInstance.get("/users");
        return res.data;
    } catch (e) {
        throw e;
    }
};