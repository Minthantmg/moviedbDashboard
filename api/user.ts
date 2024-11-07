import {axiosInstance} from "@/utills/axiosInstance";

interface CreateUserParams {
    name: string;
    email: string;
    password: string;
    role: 'admin' | 'user'
}

export const getUserList = async () => {
    try {
        const res = await axiosInstance.get("/users");
        return res.data;
    } catch (e) {
        throw e;
    }
};

export const createUser = async ({name, email, password,role}:CreateUserParams) => {
    try {
        const res = await axiosInstance.post("/register",{name, email, password,role});
        return res.data;
    }catch (e){
        throw e;
    }
}