import { useQuery } from "@tanstack/react-query";
import {getUserList} from "@/api/user";

const getUserListHook = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery({
        queryKey: ["get", "user"],
        queryFn: getUserList,
    });
};

export const useUser = () => {
    return {
        getUserListHook
    };
};