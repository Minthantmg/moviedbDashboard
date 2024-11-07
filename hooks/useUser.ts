import {useMutation, useQuery} from "@tanstack/react-query";
import {createUser, getUserList} from "@/api/user";

const getUserListHook = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery({
        queryKey: ["get", "user"],
        queryFn: getUserList,
    });
};

const createUserHook = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useMutation({
        mutationKey: ["post","user"],
        mutationFn: createUser,
    })
}


export const useUser = () => {
    return {
        getUserListHook,
        createUserHook,
    };
};