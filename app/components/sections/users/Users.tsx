import React from 'react';
import {useUser} from "@/hooks/useUser";
import {DataTable} from "@/app/components/sections/users/data-table";
import {columns} from "@/app/components/sections/users/columns";

const Users = () => {
    const {getUserListHook} = useUser()
    const {data: user,isLoading,isSuccess} = getUserListHook()
    return (
        <div>
            {isLoading && <>Loading...</>}
            {isSuccess && (
                <div>
                    <div className='text-3xl mt-4'>User and Admin List</div>
                    <div className='mt-4'>Total: {user.length} person</div>
                    <DataTable columns={columns} data={user}/>
                </div>
            )}
        </div>
    );
};

export default Users;