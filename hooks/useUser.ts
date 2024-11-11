import {useMutation, useQuery,useQueryClient} from "@tanstack/react-query";
import {createUser, deleteUser, getUserList, updateUser} from "@/api/user";
import {User} from "@/type";

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
        mutationFn: createUser,
    })
}

const deleteUserHook = () =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const queryClient = useQueryClient();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useMutation({
        mutationKey: ["delete", "user"],
        mutationFn: deleteUser,
        onSuccess: () => {
            try {
                // @ts-ignore
                queryClient.invalidateQueries(["get", "user"]);
            } catch (error) {
                console.error('Error while invalidating query:', error);
            }
        },
    });
}

const updateUserHook = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const queryClient = useQueryClient();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useMutation({
        mutationKey: ["update", "user"],
        mutationFn: ({ userId, updatedData }: { userId: string; updatedData: Partial<User> }) =>
            updateUser(userId, updatedData),
        onSuccess: () => {
            try {
                // @ts-ignore
                queryClient.invalidateQueries(["get", "user"]);
            } catch (error) {
                console.error('Error while invalidating query:', error);
            }
        },
    })
}


export const useUser = () => {
    return {
        getUserListHook,
        createUserHook,
        deleteUserHook,
        updateUserHook
    };
};