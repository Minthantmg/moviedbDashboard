import {axiosInstance} from "@/utills/axiosInstance";
import {User} from "@/type";

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
export const deleteUser = async (userId: string) => {
    try {
        const res = await axiosInstance.delete(`/user/${userId}`); // Add userId to the URL path
        return res.data;
    } catch (e) {
        throw e;
    }
};

export const updateUser = async (userId: string, updatedData: Partial<User>) => {
    try {
        const res = await axiosInstance.put(`/user/${userId}`,updatedData)
        return res.data;
    }catch (e){
        throw e;
    }
}